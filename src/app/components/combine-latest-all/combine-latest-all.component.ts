import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { fromEvent, map, interval, take, combineLatestAll } from 'rxjs';

@Component({
  selector: 'app-combine-latest-all',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      combine-latest-all works!
    </p>
  `,
  styles: [
  ]
})
export class CombineLatestAllComponent implements OnInit {
  ngOnInit() {
    const clicks = fromEvent(document, 'click');
    const higherOrder = clicks.pipe(
      map(() => interval(2000).pipe(take(3))),
      take(2)
    );
    const result = higherOrder.pipe(combineLatestAll());

    result.subscribe((x) => console.log(x));
  }
}
