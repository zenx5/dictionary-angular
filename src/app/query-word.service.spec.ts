import { TestBed } from '@angular/core/testing';

import { QueryWordService } from './query-word.service';

describe('QueryWordService', () => {
  let service: QueryWordService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QueryWordService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
