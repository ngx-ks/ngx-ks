import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ControlsService {

  public loading$ = new BehaviorSubject(false);

  public setLoading = (loading: boolean) => this.loading$.next(loading);
  public toggleLoading = () => this.loading$
    .pipe(take(1))
    .subscribe(loading => this.setLoading(!loading));

}
