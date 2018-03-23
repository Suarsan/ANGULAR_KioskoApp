import { UserModel } from '../../models/user.model';
import { Injectable } from '@angular/core';
import { UserService } from '../user-service/user.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthService {

  private user: UserModel;

  constructor(private userService: UserService) { }

  public signUp(email: string, pass: string) {
    return new Observable(
      observable =>
        this.userService.findUserbyEmail(email).subscribe(
        findedUser => {
          if (findedUser) {
            this.user = findedUser;
            localStorage.setItem('kioskoUser', JSON.stringify(this.user));
            observable.next(findedUser);
          }

        }
    ));
  }

  public signOut() {
  }
}
