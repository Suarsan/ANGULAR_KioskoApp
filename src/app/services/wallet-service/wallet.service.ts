import { CreditcardModel } from '../../models/creditcard.model';
import { Injectable } from '@angular/core';
import { UserService } from '../user-service/user.service';
import { Observable } from 'rxjs/Observable';
import { WalletDaoService } from '../../../dao/wallet-dao/wallet-dao.service';
import { WalletModel } from '../../models/wallet.model';

@Injectable()
export class WalletService {

  constructor(private walletDAO: WalletDaoService) { }

  getWalletByUserId(userId) {
    return new Observable<WalletModel[]>(
      observable => {
        this.walletDAO.getProperty('userId', userId).subscribe(
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
    let auxWallet: WalletModel;
    return new Observable(
      observable => {
        this.getWalletByUserId(user.Id).subscribe(
          res => {
            if (res.length > 0) {
              auxWallet = new WalletModel(0);
              Object.assign(auxWallet, res);
              auxWallet.Creditcards.push(creditcard);
              this.walletDAO.change(auxWallet.Id, auxWallet).subscribe(
                wallet => {
                  observable.next(wallet);
                }
              );
            } else {
              auxWallet = new WalletModel(0);
              // auxWallet.UserId(user.Id);
              // auxWallet.Creditcards(new Array<CreditcardModel>());
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
