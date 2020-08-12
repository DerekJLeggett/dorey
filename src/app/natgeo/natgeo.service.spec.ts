import { TestBed } from '@angular/core/testing';

import { NatgeoService } from './natgeo.service';

describe('NatgeoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NatgeoService = TestBed.get(NatgeoService);
    expect(service).toBeTruthy();
  });
});
