import { UserModel } from '../models/user.model';
import { Component, OnInit } from '@angular/core';
import { NewCreditCardComponent } from '../components/newcreditcard/newcreditcard.component';
import { ListCreditCardComponent } from '../components/listcreditcard/listcreditcard.component';
import { UserDaoService } from '../../dao/user-dao/user-dao.service';
import { AuthService } from '../services/auth-service/auth.service';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.sass']
})
export class WalletComponent implements OnInit {

  currentUser: UserModel;

  constructor(private authService: AuthService) {
    authService.checkUserLocalStorage();
    this.currentUser = this.authService.currentUser;
  }

  ngOnInit() { }

}
