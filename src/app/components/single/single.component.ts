import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { of, single, tap } from 'rxjs';

@Component({
  selector: 'app-single',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      single works!
    </p>
  `,
  styles: [
  ]
})
export class SingleComponent {
  private data$ = of(1, 2, 3, 4, 5, 6);

  ngOnInit() {
    this.data$
      .pipe(
        single((number: number) => number === 3),
        tap(res => console.log(res))
      )
      .subscribe()
  }
}
