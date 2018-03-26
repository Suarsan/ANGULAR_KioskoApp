import { UserModel } from '../../models/user.model';
import { Injectable } from '@angular/core';
import { UserService } from '../user-service/user.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthService {

  constructor(private userService: UserService) { }

  public signUp(email: string, pass: string) {
    return new Observable(
      observable =>
        this.userService.findUserbyEmail(email).subscribe(
        findedUser => {
          if (findedUser) {
            observable.next(findedUser);
          }
        }
    ));
  }

  public signIn(email: string, pass: string) {
    return new Observable(
      observable => {
        this.userService.add(new UserModel(0, email, pass)).subscribe(
          registeredUser => {
            if (registeredUser) {
              observable.next(registeredUser);
            }
          }
        );
      }
    );
  }
}
