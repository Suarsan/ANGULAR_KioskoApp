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
    this.authService.signUp(this.email, this.pass).subscribe(
      authenticated => {
        if (authenticated) {
          this.router.navigate(['/']);
        } else {
          alert('Error al autenticar');
        }
      }
    );
  }

  private goHome() {
    this.router.navigate(['/']);
  }

}
