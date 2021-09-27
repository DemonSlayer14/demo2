import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { SolarHeater } from '../shared/SolarHeater';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SolarAllocationListService {

  constructor(private http: HttpClient) { }

  getAllocations(): Observable<number[]> {
    return this.http.get<number[]>('http://localhost:3050/getSolarHeaterIds').pipe(catchError(this.errHandler));
  }

  getSolarHeaterbyId(id): Observable<SolarHeater> {
    return this.http.get<SolarHeater>(`http://localhost:3050/getSolarHeaterIds/${id}`).pipe(catchError(this.errHandler));
  }

  errHandler(err: HttpErrorResponse) {
    return throwError(err.error.message);
  }
}
