import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'ngx-ks-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  public title = 'ngx-kickstart-demo';
  public isLoading$ = new BehaviorSubject(true);

  constructor() {
    // window.setTimeout(() => this.isLoading$.next(false), 5000)
  }
}
