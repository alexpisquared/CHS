import { AfterViewInit, Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  titleBig = 'Celebrity Hologram Store';
  titleTla = 'CHS';
  userName = 'Unknown';
  isLoading: boolean; // used for showing Loading spinner during transition between pages
  isLoggingToServer: boolean;
  private subscription: Subscription;
  private _themeKey = 'themeKey';
  private _mainTheme = 'main-theme';
  private _darkTheme = 'dark-theme';
  themedIcon = './favicon.ico';
  isSignedIn: boolean;

  get themeVal(): string {
    let returnValue = localStorage.getItem(this._themeKey);
    if (returnValue === null || returnValue.length < 4) {
      returnValue = this._mainTheme;
    }
    return returnValue;
  }
  set themeVal(theme: string) {
    if (!(theme === null || theme.length < 4)) {
      localStorage.setItem(this._themeKey, theme);
    }
  }

  constructor(@Inject(DOCUMENT) private document: Document) {
    this.isSignedIn = true;
  }

  ngOnInit() {
    this.setThemeToStoredValue();
  }
  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  signOut(): void {
    // this.signInService.signoutUser();
  }

  toggleTheme() {
    if (this.document.body.classList.contains(this._mainTheme)) {
      this.document.body.classList.remove(this._mainTheme);
      this.document.body.classList.add((this.themeVal = this._darkTheme));
      this.themedIcon = './assets/images/ChsLogo_Dark.png';
    } else {
      this.document.body.classList.remove(this._darkTheme);
      this.document.body.classList.add((this.themeVal = this._mainTheme));
      this.themedIcon = './assets/images/ChsLogo_Lite.png';
    }
  }
  setThemeToStoredValue() {
    if (!this.document.body.classList.contains(this.themeVal)) {
      this.toggleTheme();
    }
  }
}
