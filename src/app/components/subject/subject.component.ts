import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-subject',
  standalone: true,
  imports: [CommonModule],
  template: `
  <button class="btn" (click)="mySubject.next('Hello!')">
    Click me! Subject
  </button>
  {{mySubject | async }}
  `
  ,
  styles: [
  ]
})
export class SubjectComponent {
  mySubject = new Subject<string>();
}
