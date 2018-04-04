import { AuthService } from '../services/auth-service/auth.service';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { UserModel } from '../models/user.model';
import { MenubarComponent } from '../menubar/menubar.component';
import { UserService } from '../services/user-service/user.service';
import { environment } from '../../environments/environment';
import { MagazineDaoService } from '../../dao/magazine-dao/magazine-dao.service';
import { MagazineModel } from '../models/magazine.model';
import { MagazineService } from '../services/magazine-service/magazine.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  private WebServiceURL: string;
  private currentUser: UserModel;
  viewedMagazines: Array<MagazineModel>;
  private fixedMagazines: Array<MagazineModel>;
  private recommendedMagazines: Array<MagazineModel>;


  constructor(private router: Router,
              private authService: AuthService,
              private userService: UserService,
              private magazineService: MagazineService,
              private magazineDaoService: MagazineDaoService) {
                authService.refreshDataSession();
                this.WebServiceURL = environment.WebServiceURL;
                this.fixedMagazines = new Array<MagazineModel>();
                this.recommendedMagazines = new Array<MagazineModel>();
                this.viewedMagazines = new Array<MagazineModel>();
              }

  ngOnInit() {
    //Si se ha cargado la info hace menos de 5min se recoge el usuario del servicio, si es mas antiguo se hace el refresh
    // this.authService.refreshDataSession().subscribe(
    //   user => {
    //     this.currentUser = user;
    //   }
    // );
    localStorage.setItem('kioskoDate', JSON.stringify(new Date()));
    this.currentUser = this.authService.currentUser;
    console.log(this.authService.currentUser.ViewedMagazines);
  }


}
