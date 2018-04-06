import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth-service/auth.service';
import { Router } from '@angular/router';
import { UserModel } from '../models/user.model';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.less']
})
export class SigninComponent implements OnInit {

  public email: string;
  public pass: string;

  constructor(private authService: AuthService, private router: Router) {
    this.email = '';
    this.pass = '';
  }

  ngOnInit() {
  }

  private signIn() {
    this.authService.signIn(this.email, this.pass).subscribe(
      loggedUser => {
          if (loggedUser[0]) {
            localStorage.setItem('kioskoUser', JSON.stringify(loggedUser[0]));
            localStorage.setItem('kioskoDate', JSON.stringify(new Date()));
            this.router.navigate(['/']);
          } else {
            console.log('No se pudo completar la autenticación');
          }
      }
    );
  }

}
