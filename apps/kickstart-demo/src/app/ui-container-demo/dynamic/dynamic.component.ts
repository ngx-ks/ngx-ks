import { Component } from '@angular/core';
import { ControlsService } from '../controls.service';

@Component({
  selector: 'ngx-ks-dynamic',
  templateUrl: './dynamic.component.html',
  styleUrls: ['./dynamic.component.scss']
})
export class DynamicComponent {

  public loading$ = this.controlsService.loading$;

  public html = `
    <ngx-ks-ui-container [loading$]="loading$">
      <div content>[...]</div>
      <div loader>
        <mat-spinner></mat-spinner>
      </div>
    </ngx-ks-ui-container>
  `;

  public css = `
    ngx-ks-ui-container {
      border: dashed 2px red;
    }
  `;

  constructor(
    public controlsService: ControlsService,
  ) { }

}
