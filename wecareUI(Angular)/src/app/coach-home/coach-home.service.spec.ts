import { TestBed } from '@angular/core/testing';

import { CoachHomeService } from './coach-home.service';

describe('CoachHomeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CoachHomeService = TestBed.get(CoachHomeService);
    expect(service).toBeTruthy();
  });
});
