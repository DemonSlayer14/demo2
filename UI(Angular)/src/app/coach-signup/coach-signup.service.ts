import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CoachSignupService {

  url: string = "http://localhost:3000/coaches"
  constructor(private http: HttpClient) { }

  coachregister(input: object): Observable<any> {
    return this.http.post(this.url, input).pipe(
      tap((res) => {
        console.log(`Response from Backend: ${res}`)
      }, catchError(this.errHandler))
    )
  }

  errHandler(err: HttpErrorResponse) {
    if (err.error instanceof Error) {
      console.log(`Error occured on client-side: ${err.error.message}`);
    } else {
      console.log(`Error occured on backend: ${err.error.message}`)
    }
    return throwError(err.error.message);
  }
}
