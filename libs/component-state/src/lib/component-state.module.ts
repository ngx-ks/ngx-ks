import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StateComponent } from './state/state.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    StateComponent,
  ],
  exports: [
    StateComponent,
  ]
})
export class ComponentStateModule {}
