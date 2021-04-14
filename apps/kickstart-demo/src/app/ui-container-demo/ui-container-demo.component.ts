import { Component, OnInit } from '@angular/core';
import { ControlsService } from './controls.service';

@Component({
  selector: 'ngx-ks-ui-container-demo',
  templateUrl: './ui-container-demo.component.html',
  styleUrls: ['./ui-container-demo.component.scss']
})
export class UiContainerDemoComponent {

  constructor(
    public controlsService: ControlsService,
  ) { }

}
