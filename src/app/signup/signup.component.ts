import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth-service/auth.service';
import { Router } from '@angular/router';
import { UserModel } from '../models/user.model';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  private email: string;
  private pass: string;

  constructor(private authService: AuthService, private router: Router) {
    this.email = '';
    this.pass = '';
  }

  ngOnInit() {
  }

  private signUp() {
    this.authService.signUp(this.email, this.pass).subscribe(
      loggedUser => {
          if (loggedUser[0]) {
            localStorage.setItem('kioskoUser', JSON.stringify(loggedUser[0]));
            this.router.navigate(['/']);
          } else {
            console.log('No se pudo completar la autenticación');
          }
      }
    );
  }

}
