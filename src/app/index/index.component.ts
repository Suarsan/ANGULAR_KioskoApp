import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  private WebServiceURL;

  constructor() { this.WebServiceURL = environment.WebServiceURL; }

  ngOnInit() {
  }

}
