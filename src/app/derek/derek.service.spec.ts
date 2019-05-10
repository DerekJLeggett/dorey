import { TestBed } from '@angular/core/testing';

import { DerekService } from './derek.service';

describe('DerekService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DerekService = TestBed.get(DerekService);
    expect(service).toBeTruthy();
  });
});
