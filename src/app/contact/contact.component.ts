import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth-service/auth.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.less']
})
export class ContactComponent implements OnInit {

  public nombre: string;
  public apellidos: string;
  public email: string;
  public mensaje: string;
  public agree = false;
  public message = '';


  constructor(private sendMeauthService: AuthService ) { }

  ngOnInit() {
  }

  private Accept() {
    console.dir(this.agree);

  }

}
