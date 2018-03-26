import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth-service/auth.service';
import { UserModel } from '../models/user.model';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  private email: string;
  private pass: string;
  private user: UserModel;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  private signIn() {
    this.authService.signIn(this.email, this.pass).subscribe(
      registeredUser => {
        if (registeredUser) {
          localStorage.setItem('kioskoUser', JSON.stringify(<UserModel>registeredUser));
          this.router.navigate(['/']);
        } else {
          console.log('No se pudo completar el registro');
        }
      }
    );
  }
}
