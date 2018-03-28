import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment';
import { MagazineModel } from '../../app/models/magazine.model';

@Injectable()
export class MagazineDaoService {

  private BASE_URL = environment.WebServiceURL + 'magazine';
  private options = {}; // si queremos aádir cabeceras o lo que sea

  constructor( private http: HttpClient ) { }

  public getAll () {
    return this.http.get<MagazineModel[]>(this.BASE_URL, this.options);
  }
  public get (id: string | number) {
    return this.http.get<MagazineModel>(this.BASE_URL + '/' + id, this.options);
  }
  public add (item: any) {
    return this.http.post<MagazineModel>(this.BASE_URL, item, this.options);
  }
  public change (item: any) {
    return this.http.put<MagazineModel>(this.BASE_URL, item, this.options);
  }
  public remove (id: string | number) {
    return this.http.delete<MagazineModel>(this.BASE_URL + 'id' + id, this.options);
  }
}
