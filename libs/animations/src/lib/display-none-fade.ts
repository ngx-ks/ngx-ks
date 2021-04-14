import { animate, style, transition, trigger } from '@angular/animations';

export const displayNoneFade = trigger('visible', [
  transition('* => true', [
    style({
      // this assumes that display was set to hidden
      display: 'unset',
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      opacity: 0,
    }),
    animate('0.3s', style({ opacity: 1 })),
  ]),
  transition('* => false', [
    style({
      display: 'unset',
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      opacity: 1,
    }),
    animate('0.3s', style({ opacity: 0 })),
  ]),
]);
