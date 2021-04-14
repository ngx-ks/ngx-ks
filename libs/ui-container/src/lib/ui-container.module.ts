import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentStateModule } from '@ngx-ks/component-state';
import { ContainerComponent } from './container/container.component';
import { ContentComponent } from './content/content.component';
import { LoaderComponent } from './loader/loader.component';

@NgModule({
  imports: [
    CommonModule,
    ComponentStateModule,
  ],
  declarations: [
    ContainerComponent,
    ContentComponent,
    LoaderComponent
  ],
  exports: [
    ContainerComponent,
    ContentComponent,
    LoaderComponent,
  ]
})
export class UiContainerModule {}
