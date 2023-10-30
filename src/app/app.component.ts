import { AfterViewInit, Component } from '@angular/core';
import { Router, ChildrenOutletContexts } from '@angular/router';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('routeAnimations', [
      transition('* => intro', [
        style({
          opacity: 0,
        }),
        animate(
          '2s ease-in-out',
          style({
            opacity: 1,
          })
        ),
      ]),
    ]),
  ],
})
export class AppComponent implements AfterViewInit {
  constructor(
    private router: Router,
    private contexts: ChildrenOutletContexts
  ) {}
  getRouteAnimationData() {
    return this.contexts.getContext('primary')?.route?.snapshot?.data?.[
      'animation'
    ];
  }

  ngAfterViewInit(): void {
    this.router.navigate(['intro']);
  }

  title = 'ramez-sp';
}
