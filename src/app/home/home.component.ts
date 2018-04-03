import { AuthService } from '../services/auth-service/auth.service';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { UserModel } from '../models/user.model';
import { MenubarComponent } from '../menubar/menubar.component';
import { UserService } from '../services/user-service/user.service';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  private WebServiceURL: string;
  private currentUser: UserModel;

  constructor(private router: Router,
              private authService: AuthService,
              private userService: UserService) {
                this.WebServiceURL = environment.WebServiceURL;
                this.currentUser = this.authService.currentUser;
              }

  ngOnInit() {}
}
