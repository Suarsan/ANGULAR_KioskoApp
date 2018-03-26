import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserModel } from '../models/user.model';
import { MenubarComponent } from '../menubar/menubar.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  private currentUser: UserModel;

  constructor(private router: Router) { }

  ngOnInit() {
    try {
      this.currentUser = JSON.parse(localStorage.getItem('kioskoUser'));
      if (!this.currentUser) {
        this.router.navigate(['/signup']);
      }
    } catch {
      this.router.navigate(['/signup']);
    }
  }
}
