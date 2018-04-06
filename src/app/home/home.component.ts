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
  sliderMagazines: Array<any>;
  viewedMagazines: Array<any>;
  recommendedMagazines: Array<any>;
  cart: Array<any>;
  likedMagazines: Array<any>;
  downloadedMagazines: Array<any>;


  constructor(private router: Router,
              private authService: AuthService,
              private userService: UserService,
              private magazineService: MagazineService,
              private magazineDaoService: MagazineDaoService) {
                this.authService.checkUserLocalStorage();
                this.currentUser = this.authService.currentUser;
                this.WebServiceURL = environment.WebServiceURL;
                this.sliderMagazines = new Array<any>();
                this.sliderMagazines[1] = new Array<any>();
                this.viewedMagazines = new Array<any>();
                this.viewedMagazines[1] = new Array<any>();
                this.recommendedMagazines = new Array<any>();
                this.recommendedMagazines[1] = new Array<any>();
                this.cart = new Array<any>();
                this.cart[1] = new Array<any>();
                this.likedMagazines = new Array<any>();
                this.likedMagazines[1] = new Array<any>();
                this.downloadedMagazines = new Array<any>();
                this.downloadedMagazines[1] = new Array<any>();
              }

  ngOnInit() {
    this.getMagazines('sliderMagazines', 'Slider', this.currentUser.SliderMagazines);
    this.getMagazines('viewedMagazines', 'Visto recientemente', this.currentUser.ViewedMagazines);
    this.getMagazines('recommendedMagazines', 'Recomendado para ti', this.currentUser.RecommendedMagazines);
    this.getMagazines('cart', 'Tus compras', this.currentUser.Cart);
    this.getMagazines('likedMagazines', 'Te han gustado', this.currentUser.LikedMagazines);
    this.getMagazines('downloadedMagazines', 'Tus descargas', this.currentUser.DownloadedMagazines);
  }

  private getMagazines(property, carouselTitle, carouselMagazines) {
    for (let i = 0; i < this.currentUser[property].length; i++) {
      this.magazineDaoService.get(this.currentUser[property][i]).subscribe(
        magazine => {
          this[property][0] = carouselTitle;
          this[property][1].push(magazine);
        }
      );
    }
  }
}
