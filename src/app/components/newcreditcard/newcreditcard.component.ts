import { Component, OnInit, Input } from '@angular/core';
import { UserModel } from '../../models/user.model';
import { CreditCardModel } from '../../models/creditcard.model';
import { UserService } from '../../services/user-service/user.service';

@Component({
  selector: 'app-newcreditcard',
  templateUrl: './newcreditcard.component.html',
  styleUrls: ['./newcreditcard.component.sass']
})
export class NewCreditCardComponent implements OnInit {

  @Input() private currentUser: UserModel;
  private creditCard: CreditCardModel;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.creditCard = new CreditCardModel();
  }

  addCreditCard() {
    this.userService.get(this.currentUser.Id).subscribe(
      user => {
        Object.assign(this.currentUser, JSON.parse(localStorage.getItem('kioskoUser')));
        this.userService.addCreditCard(this.currentUser, this.creditCard).subscribe(
          receivedUser => {
            console.log(receivedUser);
          }
        );
      }
    );
    // this.userService.addCreditCard(this.currentUser, this.creditCard).subscribe(
    //   creditCard => {
    //     //Pedir que refresque el componente que lista las tarjetas
    //   }
    // );
  }

}
