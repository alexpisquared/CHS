import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { UserCredential } from './userCredential';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { FormControl, FormGroupDirective, NgForm, Validators, FormBuilder } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material';
import { HttpErrorResponse } from '@angular/common/http';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  titleTla = 'CHS';
  user: UserCredential;
  signInReport: string;
  isSignedIn: boolean;
  hide = true;
  private subscription: Subscription;
  private _isLoading = false;
  validationMessages = {
    username: [{ type: 'required', message: 'Please enter your username' }],
    password: [
      { type: 'required', message: 'password is required' },
      { type: 'minlength', message: 'password is too short; minimum 4 characters required' }
    ]
  };
  _form = this.fb.group({
    username: ['', [Validators.required, Validators.minLength(2)]],
    password: ['', [Validators.required, Validators.minLength(4)]]
  });

  @ViewChild('focus0') usernameField: ElementRef;
  @ViewChild('focus1') passwordField: ElementRef;

  get isLoading(): boolean {
    return this._isLoading;
  }
  set isLoading(theValue: boolean) {
    this._isLoading = theValue;
  }

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit() {
    this.reset();
    setTimeout(() => {
      if (this.usernameField !== null) {
        this.usernameField.nativeElement.focus();
      }
    }, 2333);
  }

  reset() {
    this.user = { username: '', password: '' };
    this.signInReport = '';
  }

  hasError(validation, formControlName): boolean {
    const form = this._form.get(formControlName);
    return form.hasError(validation.type) && (form.dirty || form.touched);
  }

  onSubmit() {
    this.isLoading = true;
    this.user.username = this._form.value.username;
    this.user.password = this._form.value.password;
    this.isLoading = false;

    if (true) {
      this.isSignedIn = true;
      this.user = { username: '', password: '' };
      setTimeout(() => {
        this.router.navigate(['clist']);
      }, 1333);
      this.signInReport = 'Sign in successful';
    } else {
      //this.isSignedIn = false;
      this.signInReport = 'Signed out.';
      const reason = 'Some reasonable reason';
      this.signInReport = `Sign in FAILED! ${reason}`;
      setTimeout(() => {
        if (this.passwordField !== null) {
          this.passwordField.nativeElement.focus();
        }
      }, 500);
    }
  }

  onReset() {
    this._form.patchValue({
      username: '',
      password: ''
    });

    this.signInReport = 'Has been reset to the default - potentially wrong - values.';
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  onFormChanged() {
    this.signInReport = '';
  }
}
