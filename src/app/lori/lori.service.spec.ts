import { TestBed } from '@angular/core/testing';

import { LoriService } from './lori.service';

describe('LoriService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LoriService = TestBed.get(LoriService);
    expect(service).toBeTruthy();
  });
});
