import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, concatWith, EMPTY, map, Observable, retry, share } from 'rxjs';
import { Character, ResponseInfoResults } from '../interfaces/character.interfaces';
import { User } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private readonly http = inject(HttpClient);
  private readonly baseAPI = 'https://jsonplaceholder.typicode.com/todos';

  getData(): Observable<Character[]> {
    return this.http
      .get<ResponseInfoResults>('https://rickandmortyapi.com/api/character')
      .pipe(
        retry(1),
        map((res: ResponseInfoResults) => res?.results),
        share(),
        catchError(() => EMPTY)
        // catchError(()=> throwError(() => new Error('Ups something happened')))
        // catchError(()=> of([mockCharacter]))
      );
  }

  filterCharacter(name: string): Observable<Character[]> {
    const API = `https://rickandmortyapi.com/api/character/?name=${name}`;
    return this.http.get<ResponseInfoResults>(API).pipe(
      map((res: ResponseInfoResults) => res?.results),
      catchError(() => EMPTY)
    );
  }

  getUser(): Observable<User> {
    const obs1 = this.http.get<User>(`${this.baseAPI}/1`);
    const obs2 = this.http.get<User>(`${this.baseAPI}/2`);
    return obs1.pipe(
      concatWith(obs2)
    );
  }
}
