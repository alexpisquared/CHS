import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { NavTopComponent } from './nav-top/nav-top.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { CelebrityListComponent } from './celebrity-list/celebrity-list.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { HighlightDirective } from './highlight.directive';
import { CelebrityRollComponent } from './celebrity-roll/celebrity-roll.component';
import { CelebrityDetailComponent } from './celebrity-detail/celebrity-detail.component';
import { CelebrityFactorComponent } from './celebrity-factor/celebrity-factor.component';

@NgModule({
  declarations: [AppComponent, NavTopComponent, AboutComponent, HomeComponent, CelebrityListComponent, HighlightDirective, CelebrityRollComponent, CelebrityDetailComponent, CelebrityFactorComponent],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, MaterialModule, HttpClientModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
