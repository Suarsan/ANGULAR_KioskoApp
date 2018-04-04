import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { MagazineModel } from '../../models/magazine.model';

@Component({
  selector: 'app-magazine-carousel',
  templateUrl: './magazine-carousel.component.html',
  styleUrls: ['./magazine-carousel.component.sass']
})
export class MagazineCarouselComponent implements OnInit {

  @Input('magazines') magazines: Array<MagazineModel>;
  @ViewChild('wrapcarousel') wrapcarousel: ElementRef;
  public horizontalScrollValue: number;

  constructor() { }

  ngOnInit() {
    this.horizontalScrollValue = 0;
    console.log(this.magazines);
  }

  private moveLeft() {
    if (this.horizontalScrollValue < 0) {
      this.horizontalScrollValue += 50;
    }
    console.dir(this.magazines);
  }

  private moveRight() {
    if (this.horizontalScrollValue >= (this.wrapcarousel.nativeElement.scrollWidth - this.wrapcarousel.nativeElement.offsetWidth) * (-1)) {
      this.horizontalScrollValue -= 50;
    }
  }

  public horizontalScroll() {
    return {
      'transform': 'translateX(' + this.horizontalScrollValue + 'px)'
    };
  }

}
