import { TestBed } from '@angular/core/testing';

import { CreateactivityService } from './createactivity.service';

describe('CreateactivityService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CreateactivityService = TestBed.get(CreateactivityService);
    expect(service).toBeTruthy();
  });
});
