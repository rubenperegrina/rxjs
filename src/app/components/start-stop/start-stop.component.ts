import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subject, interval, takeUntil, tap } from 'rxjs';

@Component({
  selector: 'app-start-stop',
  standalone: true,
  imports: [CommonModule],
  template: `
  <span>
    <button type="button" (click)="start()">
      Start
    </button>
  </span>
  <span>
    <button type="button" (click)="stop()">
      Stop
    </button>
  </span>
  <span>
    Counter:
    {{counter}}
  </span>
  `
  ,
  styles: [
  ]
})
export class StartStopComponent {
  private stop$ = new Subject<number>();
  counter!: number;

  start() {
    interval(1000)
      .pipe(
        takeUntil(this.stop$),
        tap((val: number) => this.counter = val)
      )
      .subscribe((val: number) => console.log(val))
  }

  stop() {
    this.stop$.next(0);
  }
}
