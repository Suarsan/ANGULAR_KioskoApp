import {CreditcardModel} from '../../models/creditcard.model';
import { Injectable } from '@angular/core';
import { UserService } from '../user-service/user.service';
import { Observable } from 'rxjs/Observable';
import { WalletDaoService } from '../../../dao/wallet-dao/wallet-dao.service';
import { WalletModel } from '../../models/wallet.model';

@Injectable()
export class WalletService {

  constructor(private walletDAO: WalletDaoService) { }

  getWallet(userId) {
    return new Observable<WalletModel>(
      observable => {
        this.walletDAO.get(userId).subscribe(
          wallet => {
            observable.next(wallet);
          },
          err => {
            observable.next(null);
          }
        );
      }
    );
  }

  addCreditCard(user, creditcard) {
    return new Observable(
      observable => {
        this.getWallet(user.Id).subscribe(
          auxWallet => {
            if (auxWallet) {
              auxWallet.Creditcards.push(creditcard);
              this.walletDAO.change(auxWallet).subscribe(
                wallet => {
                  observable.next(wallet);
                }
              );
            } else {
              console.log('no hay wallet, hay que crear uno');
              auxWallet = new WalletModel(user.Id, new Array<CreditcardModel>());
              auxWallet.pushCreditcard(creditcard);
              this.walletDAO.add(auxWallet).subscribe(
                wallet => {
                  console.log('wallet creado y añadido');
                }
              );
            }

          }
        );
      }
    );


  }
}
