import { UserModel } from '../../models/user.model';
import { Injectable } from '@angular/core';
import { UserDaoService } from '../../../dao/user-dao/user-dao.service';
import { UserService } from '../user-service/user.service';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {

  public currentUser: UserModel;

  constructor(private userDAO: UserDaoService,
              private userService: UserService,
              private router: Router) {
    this.currentUser = new UserModel();
  }

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
        this.userDAO.add(new UserModel(0, email, pass)).subscribe(
          registeredUser => {
            if (registeredUser) {
              observable.next(registeredUser);
            }
          }
        );
      }
    );
  }
  public signOut() {
    localStorage.removeItem('kioskoUser');
    this.router.navigate(['/index']);
  }

  public sessionManager() {
    try {
      if (localStorage.getItem('kioskoUser')) {
        Object.assign(this.currentUser, JSON.parse(localStorage.getItem('kioskoUser')));
      } else {
        this.router.navigate(['/signup']);
      }
    } catch {
      this.router.navigate(['/signup']);
    }
  }
}
