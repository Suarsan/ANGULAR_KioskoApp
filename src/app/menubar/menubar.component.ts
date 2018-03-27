import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.sass']
})
export class MenubarComponent implements OnInit {

  @Input() currentUser;

  show = false;
  hide = true;

  constructor() { }

  ngOnInit() {
  }

  public toggleMenuBar() {
    if (!this.show) {
      this.show = true;
      this.hide = false;
    } else {
      this.show = false;
      this.hide = true;
    }
  }

  // ToggleMenubar() {
  //   switch (window.getComputedStyle(document.getElementById('toggle-menu'), 'display').getPropertyValue('display')) {
  //       default:
  //           document.getElementById('toggle-menu').style.setProperty('display', 'none');
  //           $('nav h1').show();
  //       break;
  //       case 'none':
  //           document.getElementById('toggle-menu').style.setProperty('display', 'inline-block');
  //           $('nav h1').hide();
  //           var currentUser = JSON.parse(localStorage.getItem('kioskoUser'));
  //           console.log(currentUser.email);
  //           $('.menu-profileInfo_username').text(currentUser.email);
  //           $('.menu-profileInfo_moreinfo').text(currentUser.name + ' ' + currentUser.lastName);
  //       break;
  //   }
  // }

}
