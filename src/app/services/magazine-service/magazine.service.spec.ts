import { TestBed, inject } from '@angular/core/testing';

import { MagazineService } from './magazine.service';

describe('MagazineService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MagazineService]
    });
  });

  it('should be created', inject([MagazineService], (service: MagazineService) => {
    expect(service).toBeTruthy();
  }));
});
