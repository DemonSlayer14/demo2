import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class CoachLoginService {

  url: string = "http://localhost:3000/coaches/login";

  constructor(private http: HttpClient) { }

  coachlogin(input: object): Observable<any> {
    console.log(input)
    return this.http.post(this.url, input).pipe(
      tap((res) => { console.log(`Response from server: ${res}`) }),
      catchError(this.errHandler));
  }

  errHandler(err: HttpErrorResponse): Observable<any> {
    let errmsg = "";
    if (err.error instanceof Error) {
      console.log(`Error occurred on Client-side: ${err.error.message}`);
    } else {
      console.log(`Error occurred on backend: ${err.error.message}`);
    }
    errmsg = err.error.message;
    return throwError(errmsg);
  }
}
