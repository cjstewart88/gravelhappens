import { TestBed, async, inject } from '@angular/core/testing';

import { CanLoadAdminSectionGuard } from './can-load-admin-section.guard';

describe('CanLoadAdminSectionGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CanLoadAdminSectionGuard]
    });
  });

  it('should ...', inject([CanLoadAdminSectionGuard], (guard: CanLoadAdminSectionGuard) => {
    expect(guard).toBeTruthy();
  }));
});
