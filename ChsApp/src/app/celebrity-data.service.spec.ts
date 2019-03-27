import { TestBed } from '@angular/core/testing';

import { CelebrityDataService } from './celebrity-data.service';
import { HttpClientModule } from '@angular/common/http';

describe('CelebrityDataService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    })
  );

  it('should be created', () => {
    const service: CelebrityDataService = TestBed.get(CelebrityDataService);
    expect(service).toBeTruthy();
  });
});
