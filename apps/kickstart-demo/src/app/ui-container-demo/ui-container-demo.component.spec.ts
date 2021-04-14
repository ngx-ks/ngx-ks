import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiContainerDemoComponent } from './ui-container-demo.component';

describe('UiContainerDemoComponent', () => {
  let component: UiContainerDemoComponent;
  let fixture: ComponentFixture<UiContainerDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiContainerDemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UiContainerDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
