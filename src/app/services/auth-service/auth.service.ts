import { UserModel } from '../../models/user.model';
import { Injectable } from '@angular/core';
import { UserDaoService } from '../../../dao/user-dao/user-dao.service';
import { UserService } from '../user-service/user.service';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {

  public currentUser: UserModel;

  constructor(private userDAOService: UserDaoService,
              private userService: UserService,
              private router: Router) {
    this.currentUser = new UserModel();
  }
  public signIn(email: string, pass: string) {
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

  public signUp(email: string, pass: string) {
    return new Observable(
      observable => {
        this.userDAOService.add(new UserModel(0, email, pass)).subscribe(
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

  public refreshDataSession() {
    return new Observable<UserModel>(
      observable => {
        this.userDAOService.get(this.currentUser.Id).subscribe(
          user => {
            this.currentUser = user;
            localStorage.setItem('kioskoUser', JSON.stringify(this.currentUser));
            localStorage.setItem('kioskoDate', JSON.stringify(new Date()));
            observable.next(user);
          }
        );
      }
    );
  }
  public sessionManager() {
    try {
      const savedDate = JSON.parse(localStorage.getItem('kioskoUser'));
      const now = new Date();
      const before = savedDate.setSeconds(savedDate.getSeconds() + 30);

      if ( before < now ) {
        this.refreshDataSession();
      } else {
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
    } catch (e) {

    }
  }
}
