import { Component, OnInit, ViewChild, Input, ElementRef } from '@angular/core';
import { MagazineModel } from '../../models/magazine.model';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-magazine-slider',
  templateUrl: './magazine-slider.component.html',
  styleUrls: ['./magazine-slider.component.sass']
})
export class MagazineSliderComponent implements OnInit {

  @Input('magazines') magazines: Array<MagazineModel>;
  @ViewChild('wrapslider') wrapslider: ElementRef;
  public horizontalScrollValue: number;
  public WebServiceURL;

  constructor() {
    this.WebServiceURL = environment.WebServiceURL;
  }

  ngOnInit() { }

  public horizontalScroll() {
    return {
      'transform': 'translateX(' + this.horizontalScrollValue + 'px)'
    };
  }
  private moveLeft() {
    if (this.horizontalScrollValue < 0) {
      this.horizontalScrollValue += 50;
    }
  }

  private moveRight() {
    if (this.horizontalScrollValue >= (this.wrapslider.nativeElement.scrollWidth - this.wrapslider.nativeElement.offsetWidth) * (-1)) {
      this.horizontalScrollValue -= 50;
    }
  }
}
