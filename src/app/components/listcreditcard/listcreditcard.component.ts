import { Component, OnInit, Input } from '@angular/core';
import { CreditCardModel } from '../../models/creditcard.model';
import { UserService } from '../../services/user-service/user.service';

@Component({
  selector: 'app-listcreditcard',
  templateUrl: './listcreditcard.component.html',
  styleUrls: ['./listcreditcard.component.sass']
})
export class ListCreditCardComponent implements OnInit {

  @Input() private currentUser: Array<CreditCardModel>;

  constructor(private userService: UserService) { }

  ngOnInit() {

  }

}
