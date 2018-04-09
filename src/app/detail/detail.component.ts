import { Component, OnInit, Input } from '@angular/core';
import { MagazineModel } from '../models/magazine.model';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { MagazineDaoService } from '../../dao/magazine-dao/magazine-dao.service';
import { environment } from '../../environments/environment';
import { UserModel } from '../models/user.model';
import { AuthService } from '../services/auth-service/auth.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.sass']
})
export class DetailComponent implements OnInit {

  public id: number;
  public magazine: MagazineModel;
  public WebServiceURL;
  public thumbnail: string;
  public currentUser: UserModel;

  constructor( private route: ActivatedRoute,
               private magazineDAO: MagazineDaoService,
               private authService: AuthService  ) {
                this.WebServiceURL = environment.WebServiceURL;
                this.magazine = new MagazineModel();
                this.authService.checkUserLocalStorage();
                this.currentUser = this.authService.currentUser;
               }

  ngOnInit() {
    this.getIdfromUrl().subscribe(
      id => {
        console.log(this.id);
        this.magazineDAO.get(this.id).subscribe(
          magazine => {
            console.dir(magazine);
            Object.assign(this.magazine, magazine);
          }
        );
      }
    );
  }
  getIdfromUrl() {
    return new Observable(
      observable => {
        this.route.params.subscribe(
          params => {
            this.id = params.id;
            observable.next(params.id);
          }
        );
      }
    );
  }
  downloadMagazine() {
    //Buscar como descargaba en el angularAPP
  }
  buyMagazine() {
    //Buscar como compraba en el angularAPP
  }

}
