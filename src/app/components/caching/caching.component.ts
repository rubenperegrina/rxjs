import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../services/api.service';
import { Observable } from 'rxjs';
import { Character } from 'src/app/interfaces/character.interfaces';

@Component({
  selector: 'app-caching',
  standalone: true,
  imports: [CommonModule],
  template: `
  <p>
  {{data$ | async | json }}
  </p>

  <p>
    {{data$ | async | json }}
  </p>

  <p>
    {{data$ | async | json }}
  </p>
  `
  ,
  styles: [
  ]
})
export class CachingComponent {
  data$!: Observable<Character[]>;

  private apiService = inject(ApiService);

  ngOnInit() {
     this.data$ = this.apiService.getData();
  }
}
