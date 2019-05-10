import { TestBed, inject } from '@angular/core/testing';

import { RecreationService } from './recreation.service';

describe('RecreationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RecreationService]
    });
  });

  it('should be created', inject([RecreationService], (service: RecreationService) => {
    expect(service).toBeTruthy();
  }));
});
