import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { tap, catchError } from 'rxjs/operators';


@Injectable({
  providedIn: "root",
})
export class UserLoginService {
  private url = "http://localhost:3000/users/login";
  constructor(private http: HttpClient) { }

  userlogin(input: object): Observable<any> {
    console.log(JSON.stringify(input), this.url);
    return this.http.post(this.url, input).pipe(
      tap((res) => {
        console.log(`Data Recieved: ${res}`);
      }), catchError(this.errorHanler)
    )
  }

  private errorHanler(err: HttpErrorResponse) {
    let errmsg: string = "";
    if (err.error instanceof Error) {
      console.log(`An error occured: ${err.error.message}`);
    } else {
      console.log(`An error occured at backend: ${err.error.message}`);
    }
    errmsg = err.error.message;
    return throwError(errmsg);
  }
}
