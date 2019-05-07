import { TestBed } from '@angular/core/testing';

import { HmsCoreService } from './hms-core.service';

describe('HmsCoreService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HmsCoreService = TestBed.get(HmsCoreService);
    expect(service).toBeTruthy();
  });
});
