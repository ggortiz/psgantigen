import { TestBed } from '@angular/core/testing';

import { PsgantigenService } from './psgantigen.service';

describe('PsgantigenService', () => {
  let service: PsgantigenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PsgantigenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
