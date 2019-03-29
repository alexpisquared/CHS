import { TestBed } from '@angular/core/testing';

import { CelebrityDataService } from './celebrity-data.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { RouterModule } from '@angular/router';

describe('CelebrityDataService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [HttpClientModule, RouterModule, RouterTestingModule]
    })
  );

  it('should be created', () => {
    const service: CelebrityDataService = TestBed.get(CelebrityDataService);
    expect(service).toBeTruthy();
  });
});
