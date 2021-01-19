import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CelebrityListComponent } from './celebrity-list.component';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from '../material/material.module';
import { FormBuilder } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule, MatInputModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HighlightDirective } from '../highlight.directive';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { CelebrityDataServiceBase, CelebrityDataServiceMock } from '../service/celebrity-data.service';

describe('CelebrityListComponent', () => {
  let component: CelebrityListComponent;
  let fixture: ComponentFixture<CelebrityListComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      //  1/2  Can't bind to 'formControl' since it isn't a known property of 'input'.
      imports: [HttpClientModule, MaterialModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, BrowserAnimationsModule, RouterModule, RouterTestingModule],
      declarations: [CelebrityListComponent, HighlightDirective],
      providers: [FormBuilder, { provide: CelebrityDataServiceBase, useClass: CelebrityDataServiceMock }]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CelebrityListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create *', () => {
    expect(component).toBeTruthy();
  });
});
