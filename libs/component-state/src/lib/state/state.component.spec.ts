import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StateComponent } from './state.component';

describe('StateComponent', () => {
  let component: StateComponent<any, any>;
  let fixture: ComponentFixture<StateComponent<any, any>>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
