import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { UserModel } from '../../models/user.model';
import { WalletModel } from '../../models/wallet.model';
import { CreditcardModel } from '../../models/creditcard.model';
import { UserDaoService } from '../../../dao/user-dao/user-dao.service';
import { WalletDaoService } from '../../../dao/wallet-dao/wallet-dao.service';

@Injectable()
export class UserService {

  constructor(private http: HttpClient,
              private userDAO: UserDaoService,
              private walletDAO: WalletDaoService ) { }

  public findUserbyEmail (email: string) {
    return this.userDAO.getProperty('email', email);
  }
  public getCreditCards(user: UserModel) {
    let withoutCreditcards = true;
    return new Observable(
      observable => {
        this.walletDAO.get(user.Id).subscribe(
          wallet => {
            if (wallet.Creditcards.length > 0) {
              withoutCreditcards = false;
            }
            observable.next(withoutCreditcards);
          }
        );
      }
    );
  }

  public addCreditCard (currentUser: UserModel, creditCard: CreditcardModel) {
    let user = new UserModel();
    return new Observable<UserModel>(
      observable => {
        this.userDAO.get(currentUser.Id).subscribe(
          userObject => {
            Object.assign(user, userObject);
            this.walletDAO.get(user.Id).subscribe(
              wallet => {
                wallet.pushCreditcard(creditCard);
                this.userDAO.change(user).subscribe(
                  updatedUser => {
                    observable.next(updatedUser);
                  }
                );
              }
            );
          }
        );
      }
    );
  }
}
