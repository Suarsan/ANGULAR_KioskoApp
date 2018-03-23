import { Component, OnInit } from '@angular/core';
import { BarRatingModule } from 'ngx-bar-rating';

@Component({
  selector: 'app-magazine-rating',
  templateUrl: './magazine-rating.component.html',
  styleUrls: ['./magazine-rating.component.css']
})
export class MagazineRatingComponent implements OnInit {

  public rate: number;

  constructor() { }

  ngOnInit() { }

}
