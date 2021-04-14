import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HighlightModule } from 'ngx-highlightjs';
import { UiContainerDemoComponent } from './ui-container-demo.component';
import { DynamicComponent } from './dynamic/dynamic.component';
import { FullscreenComponent } from './fullscreen/fullscreen.component';
import { FillRemainingComponent } from './fill-remaining/fill-remaining.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { UiContainerModule } from '@ngx-ks/ui-container';


const routes: Routes = [
  {
    path: '', component: UiContainerDemoComponent, children: [
      { path: '', redirectTo: 'fullscreen', pathMatch: 'full' },
      { path: 'dynamic', component: DynamicComponent },
      { path: 'fill-remaining', component: FillRemainingComponent },
      { path: 'fullscreen', component: FullscreenComponent },
    ]
  },
];

@NgModule({
  declarations: [
    DynamicComponent,
    FullscreenComponent,
    FillRemainingComponent,
    UiContainerDemoComponent
  ],
  imports: [
    CommonModule,
    UiContainerModule,
    MatProgressSpinnerModule,
    RouterModule.forChild(routes),
    HighlightModule,
  ],
})
export class UiContainerDemoModule { }
