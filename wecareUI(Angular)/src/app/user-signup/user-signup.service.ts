import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserSignupService {

  constructor(private http: HttpClient) { }

  userRegister(input: object): Observable<any> {
    return this.http.post("http://localhost:3000/users", input).pipe(
      catchError(this.errHandler)
    );
  }

  errHandler(err: HttpErrorResponse): Observable<any> {
    if (err.error instanceof Error) {
      console.log(`Error Occured at Client-side:${err.error.message}`)
    } else {
      console.log(`Error Occured at Backend:${err.error.message}`)
    }
    return throwError(err.error.message);
  }
}
