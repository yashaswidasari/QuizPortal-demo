import { TestBed } from '@angular/core/testing';

import { UserDashGuard } from './user-dash.guard';

describe('UserDashGuard', () => {
  let guard: UserDashGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(UserDashGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
