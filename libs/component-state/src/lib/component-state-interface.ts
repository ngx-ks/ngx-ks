import { Subject } from "rxjs";
import { BehaviorSubject } from "rxjs";
import { DataType, ErrorType, LoadingType } from './ComponentState';

export interface ComponentStateInterface<D, E> {
  loading$: BehaviorSubject<LoadingType>;
  data$: Subject<DataType<D>>;
  error$: Subject<ErrorType<E>>;
}
