import { TestBed } from '@angular/core/testing';

import { NarratorService } from '../services/narrator/narrator.service';

describe('NarratorService', () => {
  let service: NarratorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NarratorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
