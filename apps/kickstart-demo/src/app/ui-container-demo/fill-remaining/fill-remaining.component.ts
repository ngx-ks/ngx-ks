import { Component } from '@angular/core';
import { ControlsService } from '../controls.service';

@Component({
  selector: 'ngx-ks-fill-remaining',
  templateUrl: './fill-remaining.component.html',
  styleUrls: ['./fill-remaining.component.scss']
})
export class FillRemainingComponent {

  public loading$ = this.controlsService.loading$;

  public html = `
    <h1>Title</h1>
    <h5>Subtitle</h5>
    <ngx-ks-ui-container [loading$]="loading$" style="height: 100%;">
      <div content>[...]</div>
      <div loader><mat-spinner></mat-spinner></div>
    </ngx-ks-ui-container>
  `;

  public css = `
    :host {
      display: flex;
      flex: 1;
      flex-flow: column;
      align-items: stretch;
    }

    ngx-ks-ui-container {
      border: dashed 2px red;
    }
  `;

  constructor(
    public controlsService: ControlsService,
  ) { }

}
