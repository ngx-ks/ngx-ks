import { Component } from '@angular/core';
import { ControlsService } from '../controls.service';

@Component({
  selector: 'ngx-ks-fullscreen',
  templateUrl: './fullscreen.component.html',
  styleUrls: ['./fullscreen.component.scss']
})
export class FullscreenComponent {

  public loading$ = this.controlsService.loading$;
  public html = `
    <ngx-ks-ui-container [loading$]="loading$" style="height: 100vh;">
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
