import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable, interval, startWith, tap } from 'rxjs';

@Component({
  selector: 'app-start-with',
  standalone: true,
  imports: [CommonModule],
  template: `
  <p>Counter</p> {{ counter$ | async }}
  `
  ,
  styles: [
  ]
})
export class StartWithComponent implements OnInit {
  counter$ !: Observable<number>;

  ngOnInit() {
    this.counter$ = interval(3000)
      .pipe(
        startWith(889),
        tap(res => console.log(res))
      )
  }
}
