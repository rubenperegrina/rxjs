import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { tap } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-concat-with',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      concat-with works!
    </p>
  `,
  styles: [
  ]
})
export class ConcatWithComponent {
  private apiService = inject(ApiService);

  ngOnInit() {
    this.apiService.getUser()
      .pipe(
        tap(res => console.log(res))
      )
      .subscribe()

  }
}
