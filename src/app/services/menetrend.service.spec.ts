import { TestBed } from '@angular/core/testing';

import { MenetrendService } from './menetrend.service';

describe('MenetrendService', () => {
  let service: MenetrendService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MenetrendService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
