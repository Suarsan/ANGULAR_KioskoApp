import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../../environments/environment';
import { UserModel } from '../../models/user.model';
import { CreditCardModel } from '../../models/creditcard.model';

@Injectable()
export class UserService {

  private BASE_URL = environment.WebServiceURL + 'usuarios';
  private options = {}; // si queremos aádir cabeceras o lo que sea

  constructor( private http: HttpClient ) { }

  public getAll () {
    return this.http.get<UserModel[]>(this.BASE_URL, this.options);
  }
  public get (id: string | number) {
    return this.http.get<UserModel>(this.BASE_URL + '/' + id, this.options);
  }
  public add (item: UserModel) {
    return this.http.post<UserModel>(this.BASE_URL, item, this.options);
  }
  public change (item: UserModel) {
    return this.http.put<UserModel>(this.BASE_URL, item, this.options);
  }
  public remove (id: string | number) {
    return this.http.delete<UserModel>(this.BASE_URL + '/id' + id, this.options);
  }
  public findUserbyEmail (email: string) {
    return this.http.get<UserModel>(this.BASE_URL + '?email=' + email, this.options);
  }
  public addCreditCard (user: UserModel, creditCard: CreditCardModel) {
    return new Observable(
      observable => {
        user.CreditCards.push(creditCard);
        this.add(user).subscribe(
          receiveduser => {
            if (receiveduser) {
              observable.next(receiveduser);
            }
          }
        );
      }
    );
  }
}
