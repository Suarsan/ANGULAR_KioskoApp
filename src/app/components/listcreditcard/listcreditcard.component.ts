import { Component, OnInit, Input, OnChanges, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { UserService } from '../../services/user-service/user.service';
import { WalletModel } from '../../models/wallet.model';
import { WalletService } from '../../services/wallet-service/wallet.service';
import { UserModel } from '../../models/user.model';
import { CreditcardModel } from '../../models/creditcard.model';

@Component({
  selector: 'app-listcreditcard',
  templateUrl: './listcreditcard.component.html',
  styleUrls: ['./listcreditcard.component.sass']
})
export class ListCreditCardComponent implements OnInit, OnChanges {

  @Input() inputWallet: WalletModel;
  @Input('currentUser') currentUser: UserModel;
  @Output() walletEmitted: EventEmitter<WalletModel> = new EventEmitter<WalletModel>();
  public wallet: WalletModel;
  private selectedCreditCard: number;

  constructor( private walletService: WalletService) {
  }

  ngOnInit() {
    this.getWallet();
  }
  ngOnChanges() {
    this.getWallet();
  }


  getWallet() {
    this.walletService.getWalletByUserId(this.currentUser.Id).subscribe(
      receivedWallet => {
        if ( receivedWallet.length > 0) {
          this.wallet = new WalletModel(0);
          Object.assign(this.wallet,  receivedWallet[0]);
        }
      }
    );
  }
  removeCreditcard(creditcardIndex) {
    this.walletService.removeCreditCard(this.currentUser, creditcardIndex).subscribe(
      wallet => {
        if (wallet) {
          this.getWallet();
        }
      }
    );
  }
  selectCreditCard(item) {
    this.selectedCreditCard = item;
  }
}
