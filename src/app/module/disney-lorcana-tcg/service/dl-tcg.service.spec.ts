import { TestBed } from '@angular/core/testing';

import { DLTCGService } from './dl-tcg.service';

describe('DisneyLorcanaTCGService', () => {
  let service: DLTCGService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DLTCGService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
