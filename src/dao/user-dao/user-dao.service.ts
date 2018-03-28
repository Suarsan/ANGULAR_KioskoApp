import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserModel } from '../../app/models/user.model';
import { environment } from '../../environments/environment';

@Injectable()
export class UserDaoService {

  private BASE_URL = environment.WebServiceURL + 'usuarios';
  private options = {}; // si queremos aádir cabeceras o lo que sea

  constructor( private http: HttpClient ) { }

  public getAll () {
    return this.http.get<UserModel[]>(this.BASE_URL, this.options);
  }
  public get (id: string | number) {
    return this.http.get<UserModel>(this.BASE_URL + '/' + id, this.options);
  }
  public getProperty (property: string, value: string) {
    return this.http.get<UserModel>(this.BASE_URL + '/?' + property + '='  + value, this.options);
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
}
