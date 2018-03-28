import { TestBed, inject } from '@angular/core/testing';

import { MagazineDaoService } from './magazine-dao.service';

describe('MagazineDaoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MagazineDaoService]
    });
  });

  it('should be created', inject([MagazineDaoService], (service: MagazineDaoService) => {
    expect(service).toBeTruthy();
  }));
});
