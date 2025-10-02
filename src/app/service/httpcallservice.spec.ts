import { TestBed } from '@angular/core/testing';

import { Httpcallservice } from './httpcallservice';

describe('Httpcallservice', () => {
  let service: Httpcallservice;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Httpcallservice);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
