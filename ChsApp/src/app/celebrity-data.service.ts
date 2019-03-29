import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CelebrityDataService {
  constructor(private http: HttpClient, private router: Router) {}

  getCelebs() {
    return this.http.get('https://localhost:44382/api/Celebrities').pipe(catchError(this.handleError));
  }
  filterCelebs(filter) {
    return this.http.get(`https://localhost:44382/api/Celebrities/${filter}`).pipe(catchError(this.handleError));
  }
  getCelebsPage(page) {
    return this.http.get(`https://reqres.in/api/users?page=${page}`).pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error(' ** An error occurred:', error.error.message);
      // todo: an option: this.router.navigate(['/error']);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(` ** Backend returned code ${error.status}, body was: ${error.error}`);
    }

    // return an observable with a user-facing error message
    return throwError(' ** Something bad happened; please try again later.');
  }

  makeIntentionalError() {
    return this.http.get('not/a/real/url').pipe(catchError(this.handleError));
  }
}
