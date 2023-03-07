import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../services/api.service';
import { tap } from 'rxjs';

@Component({
  selector: 'app-error-handle',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      error-handle works!
    </p>
  `,
  styles: [
  ]
})
export class ErrorHandleComponent {
  private apiService = inject(ApiService);

  ngOnInit() {
    this.apiService
      .getData()
      .pipe(tap((res) => console.log('Res tap', res)))
      .subscribe({
        error: (error: any)=> console.log('Error: ', error)
      });
  }
}
