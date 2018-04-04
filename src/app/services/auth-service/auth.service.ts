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

  // public sessionManager() {

  //   // Comprobamos que tengamos el usuario guardado en local, si no lo tenemos redirecciona hacia fuera
  //   if (this.checkUserLocalStorage()) {

  //     try {
  //       if ( false ) {
  //         // Si es antiguo volvemos a pedir datos al server
  //         console.log('Los datos han podido cambiar, pidiendo de nuevo al servidor');
  //         this.refreshDataSession().subscribe(
  //           user => {
  //             this.currentUser = user;
  //           }
  //         );
  //       } else {
  //         this.checkUserLocalStorage();
  //       }
  //     } catch (e) {
  //       this.checkUserLocalStorage();
  //     }
  //   }
  // }

  public checkUserLocalStorage() {
    try {
      if (localStorage.getItem('kioskoUser')) {
        Object.assign(this.currentUser, JSON.parse(localStorage.getItem('kioskoUser')));
      } else {
        this.router.navigate(['/signin']);
      }
    } catch {
      this.router.navigate(['/signin']);
    }
  }
  public refreshDataSession() {
    return new Observable<UserModel>(
      observable => {
        this.userDAOService.get(this.currentUser.Id).subscribe(
          user => {
            localStorage.setItem('kioskoUser', JSON.stringify(user));
            localStorage.setItem('kioskoDate', JSON.stringify(new Date()));
            observable.next(user);
          }
        );
      }
    );
  }

}
