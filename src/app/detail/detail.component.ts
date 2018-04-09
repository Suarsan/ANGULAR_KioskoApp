import { Component, OnInit, Input } from '@angular/core';
import { MagazineModel } from '../models/magazine.model';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.sass']
})
export class DetailComponent implements OnInit {

  id: MagazineModel;

  constructor() { }

  ngOnInit() {
  }

}
