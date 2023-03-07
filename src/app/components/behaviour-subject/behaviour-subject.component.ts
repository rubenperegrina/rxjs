import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-behaviour-subject',
  standalone: true,
  imports: [CommonModule],
  template: `
  <button (click)="myBehaviourSubject.next('Hello!')">
    Click me! BehaviorSubject
  </button>
  {{myBehaviourSubject | async }}
  `
  ,
  styles: [
  ]
})
export class BehaviourSubjectComponent {
  myBehaviourSubject = new BehaviorSubject<string>('Initial message')
}
