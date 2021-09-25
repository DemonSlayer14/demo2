import { TestBed } from '@angular/core/testing';

import { CoachLoginService } from './coach-login.service';

describe('CoachLoginService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CoachLoginService = TestBed.get(CoachLoginService);
    expect(service).toBeTruthy();
  });
});
