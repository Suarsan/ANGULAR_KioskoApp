import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { MagazineModel } from '../../models/magazine.model';
import { environment } from '../../../environments/environment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-magazine-carousel',
  templateUrl: './magazine-carousel.component.html',
  styleUrls: ['./magazine-carousel.component.sass']
})
export class MagazineCarouselComponent implements OnInit {

  @Input('magazines') magazines: Array<MagazineModel>;
  @ViewChild('wrapcarousel') wrapcarousel: ElementRef;
  public horizontalScrollValue: number;
  private WebServiceURL;

  constructor( private router: Router ) {
    this.WebServiceURL = environment.WebServiceURL;
  }

  ngOnInit() {
    this.horizontalScrollValue = 0;
  }

  private moveLeft() {
    if (this.horizontalScrollValue < 0) {
      this.horizontalScrollValue += 50;
    }
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
  gotoGrid(magazines) {
    this.router.navigate(['/grid', magazines]);
  }
  gotoDetail(magazine: MagazineModel) {
    console.log('magazine');
    this.router.navigate(['/magazine', magazine.Id]);
  }

}
