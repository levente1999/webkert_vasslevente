import { TestBed } from '@angular/core/testing';

import { JarmuService } from './jarmu.service';

describe('JarmuService', () => {
  let service: JarmuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JarmuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
