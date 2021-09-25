import { TestBed } from '@angular/core/testing';

import { CoachSignupService } from './coach-signup.service';

describe('CoachSignupService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CoachSignupService = TestBed.get(CoachSignupService);
    expect(service).toBeTruthy();
  });
});
