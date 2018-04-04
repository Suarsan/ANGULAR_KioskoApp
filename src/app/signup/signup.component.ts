import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth-service/auth.service';
import { UserModel } from '../models/user.model';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  email: string;
  pass: string;
  private user: UserModel;

  constructor(private authService: AuthService,
              private router: Router) { }

  ngOnInit() { }

  private signUp() {
    this.authService.signUp(this.email, this.pass).subscribe(
      registeredUser => {
        if (registeredUser) {
          localStorage.setItem('kioskoUser', JSON.stringify(<UserModel>registeredUser));
          localStorage.setItem('kioskoDate', JSON.stringify(new Date()));
          this.router.navigate(['/']);
        } else {
          console.log('No se pudo completar el registro');
        }
      }
    );
  }
}
