import { BehaviorSubject, Observable, distinctUntilChanged, tap } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

export interface Names {
  id?: number,
  name: string,
  date: string,
  timezone: string
}

@Injectable({
  providedIn: 'root'
})
export class NamesService {

  subject$: BehaviorSubject<Names[]> = new BehaviorSubject<Names[]>([]);
  names$ = this.subject$.asObservable().pipe(distinctUntilChanged());
  backendRoute = 'http://localhost:3000/';

  constructor(private http: HttpClient) { }

  getNames(): void {
    this.http.get<Names[]>(`${this.backendRoute}names`).pipe(
      tap((names) => this.subject$.next(names))).pipe().subscribe();
  }

  addName(name: Names): Observable<null> {
    return this.http.post<null>(`${this.backendRoute}names`, name);
  }

  deleteName(id: number): Observable<null> {
    return this.http.delete<null>(`${this.backendRoute}names/${id}`);
  }
}
