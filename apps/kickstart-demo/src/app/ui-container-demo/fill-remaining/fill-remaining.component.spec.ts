import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FillRemainingComponent } from './fill-remaining.component';

describe('FillRemainingComponent', () => {
  let component: FillRemainingComponent;
  let fixture: ComponentFixture<FillRemainingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FillRemainingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FillRemainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
