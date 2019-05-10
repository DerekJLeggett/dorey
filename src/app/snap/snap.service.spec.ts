import { TestBed, inject } from '@angular/core/testing';

import { SnapService } from './snap.service';

describe('SnapService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SnapService]
    });
  });

  it('should be created', inject([SnapService], (service: SnapService) => {
    expect(service).toBeTruthy();
  }));
});
