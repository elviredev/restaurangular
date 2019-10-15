import { TestBed } from '@angular/core/testing';

import { QuickLunchService } from './quick-lunch.service';

describe('QuickLunchService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: QuickLunchService = TestBed.get(QuickLunchService);
    expect(service).toBeTruthy();
  });
});
