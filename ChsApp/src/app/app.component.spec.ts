import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { NavTopComponent } from './nav-top/nav-top.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, MaterialModule], // tu: karma errors without MaterialModule!!!
      declarations: [AppComponent, NavTopComponent]   // tu: for app-nav-top
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as titleBig 'ChsApp'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.titleBig).toEqual('Celebrity Hologram Store');
  });
});
