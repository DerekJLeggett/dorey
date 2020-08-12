import { TestBed, inject } from '@angular/core/testing';

import { DunkinService } from './dunkin.service';

describe('DunkinService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DunkinService]
    });
  });

  it('should be created', inject([DunkinService], (service: DunkinService) => {
    expect(service).toBeTruthy();
  }));
});
