import { TestBed } from '@angular/core/testing';

import { MegallohelyService } from './megallohely.service';

describe('MegallohelyService', () => {
  let service: MegallohelyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MegallohelyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
