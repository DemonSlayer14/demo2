import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CoachHomeService {

  url: string = "http://localhost:3000/coaches";

  constructor(private http: HttpClient) { }

  schedules(cid: string): Observable<any> {
    return this.http.get(`${this.url}/booking/${cid}`).pipe(
      catchError(this.errHandler)
    );
  }

  viewDetails(cid: string): Observable<any> {
    return this.http.get(`${this.url}/${cid}`).pipe(
      catchError(this.errHandler)
    );
  }

  errHandler(err: HttpErrorResponse): Observable<any> {
    if (err.error instanceof Error) {
      console.log(`Error occured on client-side: ${err.error.message}`);
    } else {
      console.log(`Error occured on backend: ${err.error.message}`)
    }
    return throwError(err.error.message);
  }
}
