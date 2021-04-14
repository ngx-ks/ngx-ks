import { Component } from '@angular/core';
import { StateComponent } from '@ngx-ks/component-state';
import { displayNoneFade } from '@ngx-ks/animations';

@Component({
  selector: 'ngx-ks-ui-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss'],
  animations: [ displayNoneFade ],
})
export class ContainerComponent<D, E> extends StateComponent<D, E> {

}
