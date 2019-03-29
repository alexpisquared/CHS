import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CelebrityRollComponent } from './celebrity-roll.component';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from '../material/material.module';
import { FormBuilder } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule, MatInputModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HighlightDirective } from '../highlight.directive';
import { Router, RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

describe('CelebrityRollComponent', () => {
  let component: CelebrityRollComponent;
  let fixture: ComponentFixture<CelebrityRollComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      //  1/2  Can't bind to 'formControl' since it isn't a known property of 'input'.
      imports: [
        HttpClientModule,
        MaterialModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        BrowserAnimationsModule,
        RouterModule,
        RouterTestingModule
      ],
      declarations: [CelebrityRollComponent, HighlightDirective],
      providers: [FormBuilder]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CelebrityRollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create +', () => {
    expect(component).toBeTruthy();
  });
});
