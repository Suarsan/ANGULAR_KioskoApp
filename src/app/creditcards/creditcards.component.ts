import { UserModel } from '../models/user.model';
import { Component, OnInit } from '@angular/core';
import { CreditCardModel } from '../models/creditcard.model';
import { NewCreditCardComponent } from '../components/newcreditcard/newcreditcard.component';
import { ListCreditCardComponent } from '../components/listcreditcard/listcreditcard.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-creditcards',
  templateUrl: './creditcards.component.html',
  styleUrls: ['./creditcards.component.sass']
})
export class CreditCardsComponent implements OnInit {

  private currentUser: UserModel;

  constructor(private router: Router) {
    this.currentUser = new UserModel();
  }

  ngOnInit() {
    try {
      Object.assign(this.currentUser, JSON.parse(localStorage.getItem('kioskoUser')));
      if (!this.currentUser) {
        this.router.navigate(['/signup']);
      }
    } catch {
      this.router.navigate(['/signup']);
    }
  }

}
