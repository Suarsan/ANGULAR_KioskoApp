import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth-service/auth.service';
import { Router } from '@angular/router';

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

  public signUp() {
    if (this.authService.signUp(this.email, this.pass)) {
      this.goHome();
    }
  }

  private goHome() {
    this.router.navigate(['/']);
  }

}
