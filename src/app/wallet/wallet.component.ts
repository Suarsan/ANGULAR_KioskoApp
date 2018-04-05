import { UserModel } from '../models/user.model';
import { Component, OnInit, EventEmitter, ElementRef, ViewChild } from '@angular/core';
import { NewCreditCardComponent } from '../components/newcreditcard/newcreditcard.component';
import { ListCreditCardComponent } from '../components/listcreditcard/listcreditcard.component';
import { UserDaoService } from '../../dao/user-dao/user-dao.service';
import { AuthService } from '../services/auth-service/auth.service';
import { WalletModel } from '../models/wallet.model';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.sass']
})
export class WalletComponent implements OnInit {

  currentUser: UserModel;
  wallet: WalletModel;

  constructor(private authService: AuthService) {
    this.wallet = new WalletModel(0);
    authService.checkUserLocalStorage();
    this.currentUser = this.authService.currentUser;
  }

  ngOnInit() { }

  refreshCreditcardsList(wallet) {
    this.wallet = wallet;
  }

}
