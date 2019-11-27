import { TestBed } from '@angular/core/testing';

import { MallsService } from './malls.service';

describe('MallsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MallsService = TestBed.get(MallsService);
    expect(service).toBeTruthy();
  });
});
