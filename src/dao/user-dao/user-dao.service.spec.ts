import { TestBed, inject } from '@angular/core/testing';

import { UserDaoService } from './user-dao.service';

describe('UserDaoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserDaoService]
    });
  });

  it('should be created', inject([UserDaoService], (service: UserDaoService) => {
    expect(service).toBeTruthy();
  }));
});
