import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CelebrityDetailComponent } from './celebrity-detail.component';

describe('CelebrityDetailComponent', () => {
  let component: CelebrityDetailComponent;
  let fixture: ComponentFixture<CelebrityDetailComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CelebrityDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CelebrityDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
