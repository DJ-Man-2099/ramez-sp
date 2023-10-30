import {
  trigger,
  transition,
  style,
  animate,
  state,
} from '@angular/animations';
import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  animations: [
    trigger('orig', [
      state(
        'out',
        style({
          opacity: 0,
        })
      ),
      transition('out => in', [
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
    trigger('imp', [
      state(
        'out',
        style({
          opacity: 0,
        })
      ),
      transition('out => in', [
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
    trigger('final', [
      state(
        'out',
        style({
          opacity: 0,
        })
      ),
      transition('out => in', [
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
export class MainComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    this.orig = 'in';
    setTimeout(() => {
      this.imp = 'in';
      setTimeout(() => {
        this.final = 'in';
      }, 2000);
    }, 2000);
  }
  orig: string = 'out';
  imp: string = 'out';
  final: string = 'out';
}
