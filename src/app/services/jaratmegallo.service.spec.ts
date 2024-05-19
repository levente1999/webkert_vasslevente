import { TestBed } from '@angular/core/testing';

import { JaratmegalloService } from './jaratmegallo.service';

describe('JaratmegalloService', () => {
  let service: JaratmegalloService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JaratmegalloService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
