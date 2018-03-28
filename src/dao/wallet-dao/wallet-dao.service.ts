import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { WalletModel } from '../../app/models/wallet.model';

@Injectable()
export class WalletDaoService {

  private BASE_URL = environment.WebServiceURL + 'wallets';
  private options = {}; // si queremos aádir cabeceras o lo que sea

  constructor( private http: HttpClient ) { }

  public getAll () {
    return this.http.get<WalletModel[]>(this.BASE_URL, this.options);
  }
  public get (id: string | number) {
    return this.http.get<WalletModel>(this.BASE_URL + '/' + id, this.options);
  }
  public getProperty (property: string, value: string) {
    return this.http.get<WalletModel>(this.BASE_URL + '/?' + property + '='  + value, this.options);
  }
  public add (item: WalletModel) {
    return this.http.post<WalletModel>(this.BASE_URL, item, this.options);
  }
  public change (item: WalletModel) {
    return this.http.put<WalletModel>(this.BASE_URL, item, this.options);
  }
  public remove (id: string | number) {
    return this.http.delete<WalletModel>(this.BASE_URL + '/id' + id, this.options);
  }
}
