import { Component, OnInit, ViewChild, ElementRef, OnChanges } from '@angular/core';
import { AuthService } from '../services/auth-service/auth.service';
import { UserModel } from '../models/user.model';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.sass']
})
export class ProfileComponent implements OnInit {

  private currentUser: UserModel;
  private WebServiceURL;
  private disabled: boolean;

  constructor(private authService: AuthService,
              private router: Router) {
    this.currentUser = new UserModel();
    authService.checkUserLocalStorage();
    this.currentUser = authService.currentUser;
    this.WebServiceURL = environment.WebServiceURL;  }

  ngOnInit() {
    this.disabled = true;
  }
  public gotoMyAdresses() {
    this.router.navigate(['/adresses']);
  }
  private gotoMyWallet() {
    this.router.navigate(['/wallet']);
  }

}
