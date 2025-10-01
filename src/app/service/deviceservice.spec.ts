import { TestBed } from '@angular/core/testing';

import { Deviceservice } from './deviceservice';

describe('Deviceservice', () => {
  let service: Deviceservice;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Deviceservice);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
