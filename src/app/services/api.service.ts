import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, EMPTY, map, Observable, retry, share } from 'rxjs';
import { Character, ResponseInfoResults } from '../interfaces/character.interfaces';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private readonly http = inject(HttpClient);

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
}
