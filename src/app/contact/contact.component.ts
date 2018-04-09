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
  public userMessage: string;
  public message = '';

  constructor() {
    this.email = '';
    this.userMessage = '';
   }

  ngOnInit() {
  }

  private Accept() {

    if (this.userMessage === '' || this.email === '' ) {
      console.log('mensaje no enviado');
    } else {
      console.log('mensaje enviado');
      this.message = 'El mensaje no se puede enviar.';
    }

  }

}
