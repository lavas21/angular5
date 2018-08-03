import { TestBed, inject } from '@angular/core/testing';

import { UniGuardService } from './uni-guard.service';

describe('UniGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UniGuardService]
    });
  });

  it('should be created', inject([UniGuardService], (service: UniGuardService) => {
    expect(service).toBeTruthy();
  }));
});
