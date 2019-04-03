import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private lastUsernameKey = 'lastUsernameKey';
  private lastIsSignInKey = 'lastIsSignInKey';

  get lastUsernameVal(): string {
    let returnValue = localStorage.getItem(this.lastUsernameKey);
    if (returnValue === null || returnValue.length < 4) {
      returnValue = '[Unknown]';
    }
    return returnValue;
  }
  set lastUsernameVal(lastUsername: string) {
    if (!(lastUsername === null || lastUsername.length < 4)) {
      localStorage.setItem(this.lastUsernameKey, lastUsername);
    }
    console.log(` ** lastUsername just set to : ${localStorage.getItem(this.lastUsernameKey)}`);
  }

  get lastIsSignInVal(): boolean {
    let returnValue = localStorage.getItem(this.lastIsSignInKey);
    if (returnValue === null) {
      returnValue = 'false';
    }
    return returnValue === 'true';
  }
  set lastIsSignInVal(lastIsSignIn: boolean) {
    if (!(lastIsSignIn === null)) {
      localStorage.setItem(this.lastIsSignInKey, lastIsSignIn ? 'true' : 'false');
    }
    console.log(` ** lastIsSignIn just set to : ${localStorage.getItem(this.lastIsSignInKey)}`);
  }

  constructor(private http: HttpClient, private router: Router) {}

  SignIn(username: string, password: string) {
    this.lastUsernameVal = username;
    this.lastIsSignInVal = username !== password;
    return this.lastIsSignInVal ? '' : 'The valid password must not match the user name!';
  }

  SignOut() {
    this.lastIsSignInVal = false;
  }

  getLastUsername() {
    return this.lastUsernameVal;
  }
  getLastIsSignIn() {
    return this.lastIsSignInVal;
  }
}
