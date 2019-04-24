import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Router } from '@angular/router';

export abstract class CelebrityDataServiceBase {
  abstract getCelebsList();
  abstract filterCelebsList(filter);
  abstract getCelebsRoll(page);
  abstract filterCelebsRoll(filter);

  abstract getDetail(id: number): any;
  abstract updateDetail(factor: any): any; // import('../model/factor').Factor): any;
  abstract getFactor(id: number): any;
  abstract updateFactor(factor: any): any; // import('../model/factor').Factor): any;
}
@Injectable({
  providedIn: 'root'
})
export class CelebrityDataService extends CelebrityDataServiceBase {
  constructor(private http: HttpClient, private router: Router) {
    super();
  }

  getCelebsList() {
    return this.http.get('https://localhost:44382/api/Celebrities').pipe(catchError(this.handleError));
  }
  filterCelebsList(filter) {
    return this.http.get(`https://localhost:44382/api/Celebrities/${filter}`).pipe(catchError(this.handleError));
  }
  getCelebsRoll(page) {
    return this.http.get(`https://reqres.in/api/users?page=${page}`).pipe(catchError(this.handleError));
  }
  filterCelebsRoll(filter) {
    return this.http.get(`https://reqres.in/api/users?per_page=12`).pipe(catchError(this.handleError));
  }

  getDetail(id: number): any {
    throw new Error('Method not implemented.');
  }
  updateDetail(factor: import('../model/factor').Factor): any {
    throw new Error('Method not implemented.');
  }
  getFactor(id: number): any {
    return this.http.get(`https://reqres.in/api/users/${id}`).pipe(catchError(this.handleError));
  }
  updateFactor(factor: import('../model/factor').Factor): any {
    throw new Error('Method not implemented.');
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
@Injectable({
  providedIn: 'root'
})
export class CelebrityDataServiceMock extends CelebrityDataServiceBase { // todo: implement mocking!!! 
  constructor(private http: HttpClient, private router: Router) {
    super();
  }

  getCelebsList() {
    return this.http.get('https://localhost:44382/api/Celebrities').pipe(catchError(this.handleError));
  }
  filterCelebsList(filter) {
    return this.http.get(`https://localhost:44382/api/Celebrities/${filter}`).pipe(catchError(this.handleError));
  }
  getCelebsRoll(page) {
    return this.http.get(`https://reqres.in/api/users?page=${page}`).pipe(catchError(this.handleError));
  }
  filterCelebsRoll(filter) {
    return this.http.get(`https://reqres.in/api/users?per_page=12`).pipe(catchError(this.handleError));
  }

  getDetail(id: number): any {
    throw new Error('Method not implemented.');
  }
  updateDetail(factor: import('../model/factor').Factor): any {
    throw new Error('Method not implemented.');
  }
  getFactor(id: number): any {
    return this.http.get(`https://reqres.in/api/users/${id}`).pipe(catchError(this.handleError));
  }
  updateFactor(factor: import('../model/factor').Factor): any {
    throw new Error('Method not implemented.');
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
