import { Component, OnInit, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { UserModel } from '../models/user.model';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth-service/auth.service';
import { OnChanges } from '@angular/core/src/metadata/lifecycle_hooks';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.sass']
})
export class MenubarComponent implements OnInit {

  private WebServiceURL: string;
  private currentUser: UserModel;
  public show = false;
  public hide = true;


  constructor(private router: Router,
              private authService: AuthService) {
                this.currentUser = this.authService.currentUser;
                this.WebServiceURL = environment.WebServiceURL;
              }

  ngOnInit() { }

  public toggleMenuBar() {
    if (!this.show) {
      this.show = true;
      this.hide = false;
    } else {
      this.show = false;
      this.hide = true;
    }
  }
  private exit() {
    console.log('asdd');
    this.authService.signOut();
  }

}
