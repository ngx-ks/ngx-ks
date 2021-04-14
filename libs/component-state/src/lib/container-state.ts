import { combineLatest } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs';
import { ErrorType, LoadingType } from './ComponentState';
import { StateComponent } from './state/state.component';

export class ContainerState<D, E> extends StateComponent<D, E> {

  public queries: Observable<any>[];
  public loadingQueries: Observable<LoadingType>[];
  public errorQueries: Observable<ErrorType<E>>[];

  // TODO:
  public loading$ = combineLatest<LoadingType>([]) as BehaviorSubject<LoadingType>;

}
