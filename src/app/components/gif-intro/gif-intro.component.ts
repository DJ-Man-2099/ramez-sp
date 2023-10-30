import { trigger, transition, style, animate } from '@angular/animations';
import { AfterViewInit, Component } from '@angular/core';
import { Router, ChildrenOutletContexts } from '@angular/router';

@Component({
  selector: 'app-gif-intro',
  templateUrl: './gif-intro.component.html',
  styleUrls: ['./gif-intro.component.css'],
  animations: [
    trigger('exit', [
      transition('in => out', [
        style({
          opacity: 1,
        }),
        animate(
          '2s ease-in-out',
          style({
            opacity: 0,
          })
        ),
      ]),
    ]),
  ],
})
export class GIFIntroComponent implements AfterViewInit {
  constructor(private router: Router) {}
  ngAfterViewInit(): void {
    setTimeout(() => {
      this.isLoaded = true;
      setTimeout(() => {
        this.isLoaded = false;
        this.state = 'out';
        setTimeout(() => this.router.navigate(['home']), 2000);
      }, 8175);
    }, 2000);
  }
  isLoaded: boolean = false;
  state: string = 'in';
}
