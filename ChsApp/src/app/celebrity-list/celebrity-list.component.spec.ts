import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CelebrityListComponent } from './celebrity-list.component';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from '../material/material.module';

describe('CelebrityListComponent', () => {
  let component: CelebrityListComponent;
  let fixture: ComponentFixture<CelebrityListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CelebrityListComponent],
      imports: [HttpClientModule, MaterialModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CelebrityListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
