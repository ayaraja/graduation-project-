import { TestBed } from '@angular/core/testing';

import { CafesService } from './cafes.service';

describe('CafesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CafesService = TestBed.get(CafesService);
    expect(service).toBeTruthy();
  });
});
