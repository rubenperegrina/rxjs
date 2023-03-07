import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { Character } from 'src/app/interfaces/character.interfaces';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-async',
  standalone: true,
  imports: [CommonModule],
  template: `
  <ul>
    <li *ngFor="let character of data$ | async">
    {{character.name}} - {{character.status}}
    </li>
  </ul>
`,
  styles: [
  ]
})
export class AsyncComponent {
  data$!: Observable<Character[]>;

  private apiService = inject(ApiService);


  ngOnInit(): void {
    this.data$ = this.apiService.getData();
  }
}
