import { Injectable } from '@angular/core';
import { MagazineDaoService } from '../../../dao/magazine-dao/magazine-dao.service';
import { Observable } from 'rxjs/Observable';
import { MagazineModel } from '../../models/magazine.model';

@Injectable()
export class MagazineService {


  constructor( private magazineDaoService: MagazineDaoService) { }

  public getMagazinesByProperty(property, value) {
    return new Observable(
      observable => {
        this.magazineDaoService.getProperty(property, value).subscribe(
          magazines => {
            observable.next(magazines);
          }
        );
      }
    );
  }

}
