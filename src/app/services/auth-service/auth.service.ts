import { UserModel } from '../../models/user.model';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  private isAuthenticated = false;
  private user: UserModel;

  constructor() { }

  public signUp(email: string, pass: string): boolean {
    try {
      this.isAuthenticated = true;
      this.user = new UserModel(email, pass);
      localStorage.setItem('kioskoUser', JSON.stringify(this.user));
      return true;
    } catch (e) {
      console.log('Local storage "setItem" problem');
      return false;
    }
  }

  public signOut() {
    this.isAuthenticated = false;
  }
}
