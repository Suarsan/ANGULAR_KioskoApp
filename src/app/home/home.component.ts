import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  private email: string;

  constructor(private router: Router) { }

  ngOnInit() {
    try {
      localStorage.getItem('kioskoUser');
      this.email = JSON.parse(localStorage.getItem('kioskoUser'))._email;
      console.log(this.email);
      this.router.navigate(['/']);
    } catch {
      this.router.navigate(['/signup']);
    }
  }

}
