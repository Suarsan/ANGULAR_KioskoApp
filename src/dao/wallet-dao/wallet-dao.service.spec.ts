import { TestBed, inject } from '@angular/core/testing';

import { WalletDaoService } from './wallet-dao.service';

describe('WalletDaoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WalletDaoService]
    });
  });

  it('should be created', inject([WalletDaoService], (service: WalletDaoService) => {
    expect(service).toBeTruthy();
  }));
});
