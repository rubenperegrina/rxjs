import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Observable, withLatestFrom } from 'rxjs';

@Component({
  selector: 'app-with-latest-from',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
  <p *ngIf="combinedValue$ | async as combinedValue">Hello, {{ combinedValue }}</p>
  <form [formGroup]="profileForm">
    <label for="first-name">First Name: </label>
    <input id="first-name" type="text" formControlName="firstName">
    <label for="last-name">Last Name: </label>
    <input id="last-name" type="text" formControlName="lastName">
  </form>
  `
  ,
  styles: [
  ]
})
export class WithLatestFromComponent {
  profileForm!: FormGroup;
  combinedValue$!: Observable<[string, string]> | undefined;

  private fb = inject(FormBuilder);

  ngOnInit(): void {
    this.initForm();
    this.initFormChanges();
  }

  private initFormChanges(): void {
    this.combinedValue$ = this.profileForm.get('lastName')?.valueChanges
      .pipe(
        withLatestFrom(this.profileForm.get('firstName')?.valueChanges as Observable<string>)
      )
  }

  private initForm() {
    this.profileForm = this.fb.group({
      firstName: ['', { nonNullable: true }],
      lastName: ['', { nonNullable: true }],
    });
  }
}
