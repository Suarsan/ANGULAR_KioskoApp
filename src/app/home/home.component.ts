import { AuthService } from '../services/auth-service/auth.service';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { UserModel } from '../models/user.model';
import { MenubarComponent } from '../menubar/menubar.component';
import { UserService } from '../services/user-service/user.service';
import { environment } from '../../environments/environment';
import { MagazineDaoService } from '../../dao/magazine-dao/magazine-dao.service';
import { MagazineModel } from '../models/magazine.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  private WebServiceURL: string;
  private currentUser: UserModel;
  public categories: Array<string>;
  private magazines: Array<any>;

  constructor(private router: Router,
              private authService: AuthService,
              private userService: UserService,
              private magazineDaoService: MagazineDaoService) {
                this.WebServiceURL = environment.WebServiceURL;
                this.currentUser = this.authService.currentUser;
                this.magazines = new Array<any>();
                this.categories = ['categoria', 'categoria', 'categoria', 'categoria', 'categoria'];
              }

  ngOnInit() {
    for (let i = 0; i < this.categories.length; i++) {
      this.getMagazines(this.categories[i]);
    }
  }

  private getMagazines(category) {
    this.magazineDaoService.getProperty('category', category).subscribe(
      magazines => {
        this.magazines.push(magazines);
      }
    );
  }
}
