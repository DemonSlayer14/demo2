import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserHomeService {

  url: string = "http://localhost:3000";

  constructor(private http: HttpClient) { }

  allcoaches(): Observable<any> {
    return this.http.get(`${this.url}/coaches/all`).pipe(
      catchError(this.errHandler)
    )
  }

  appointments(uid: string): Observable<any> {
    return this.http.get(`${this.url}/users/booking/${uid}`).pipe(
      catchError(this.errHandler)
    )
  }

  rescheduleAppointment(input: object, bid: string): Observable<any> {
    return this.http.put(`${this.url}/booking/${bid}`, input).pipe(
      catchError(this.errHandler)
    )
  }

  confirmAppointment(input: object, uid: string, cid: string): Observable<any> {
    return this.http.post(`${this.url}/users/booking/${uid}/${cid}`, input).pipe(
      catchError(this.errHandler)
    )
  }

  cancel(bid: string): Observable<any> {
    return this.http.delete(`${this.url}/booking/${bid}`).pipe(
      catchError(this.errHandler)
    )
  }

  viewDetails(uid: string): Observable<any> {
    return this.http.get(`${this.url}/users/${uid}`).pipe(
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
