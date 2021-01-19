import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AboutComponent } from './about.component';
import { MaterialModule } from '../material/material.module';

import { RouterTestingModule } from '@angular/router/testing'; // no provider for location!!!

describe('AboutComponent', () => {
  let component: AboutComponent;
  let fixture: ComponentFixture<AboutComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [MaterialModule, RouterTestingModule],
      declarations: [AboutComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create ?', () => {
    expect(component).toBeTruthy();
  });
});
