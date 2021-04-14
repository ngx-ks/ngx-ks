import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import { DataType, ErrorType, LoadingType } from '../ComponentState';

@Component({
  selector: 'ngx-ks-state',
  template: ``,
})
export class StateComponent<D, E> {

  @Input()
  public loading$: BehaviorSubject<LoadingType> = new BehaviorSubject<LoadingType>(false);

  @Input()
  public data$: Subject<DataType<D>> = new Subject<DataType<D>>();

  @Input()
  public error$: Subject<ErrorType<E>> = new Subject<ErrorType<E>>();

}
