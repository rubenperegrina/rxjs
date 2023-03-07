import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { fromEvent, tap } from 'rxjs';

@Component({
  selector: 'app-from-event',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button class="btn" #myButton>Click me</button>
  `
  ,
  styles: [
  ]
})
export class FromEventComponent {
  @ViewChild('myButton', { static: true }) myButton!: ElementRef;

  ngOnInit() {
    const document$ = fromEvent(this.myButton.nativeElement, 'click');
    document$.pipe(tap((res) => console.log(res))).subscribe();
  }
}
