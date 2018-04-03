import { Component, OnInit, Input } from '@angular/core';
import { UserModel } from '../../models/user.model';
import { CreditcardModel } from '../../models/creditcard.model';
import { UserDaoService } from '../../../dao/user-dao/user-dao.service';
import { UserService } from '../../services/user-service/user.service';
import { AuthService } from '../../services/auth-service/auth.service';
import { WalletModel } from '../../models/wallet.model';
import { WalletService } from '../../services/wallet-service/wallet.service';

@Component({
  selector: 'app-newcreditcard',
  templateUrl: './newcreditcard.component.html',
  styleUrls: ['./newcreditcard.component.sass']
})
export class NewCreditCardComponent implements OnInit {

  private currentUser: UserModel;
  private wallet: WalletModel;
  public creditcard: CreditcardModel;

  constructor(private userDaoService: UserDaoService,
              private userService: UserService,
              private authService: AuthService,
              private walletService: WalletService) {
                this.currentUser = this.authService.currentUser;
                this.creditcard = new CreditcardModel();

              }

  ngOnInit() { }

  getCreditCards() {
    this.walletService.getWalletByUserId(this.currentUser).subscribe(
      wallet => {
        console.log('getCreditCards hechoo');
      }
    );
  }
  addCreditCard() {
    this.walletService.addCreditCard(this.currentUser, this.creditcard).subscribe(
      wallet => {
        if (wallet) {
          console.dir(wallet);
          console.log('hecho');
        } else {
          console.log('hay que crear uno');
        }

      }
    );
  }


}
