import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CelebrityDataService {
  constructor(private http: HttpClient) {}

  getCelebs(page) {
    return this.http.get('https://localhost:44382/api/Celebrities');

    //    return this.http.get('https://reqres.in/api/users?page=' + page);
  }
}
