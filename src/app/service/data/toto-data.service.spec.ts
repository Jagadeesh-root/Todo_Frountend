import { TestBed } from '@angular/core/testing';

import { TotoDataService } from './toto-data.service';

describe('TotoDataService', () => {
  let service: TotoDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TotoDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
