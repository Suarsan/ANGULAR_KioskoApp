import { Component, OnInit, Input } from '@angular/core';
import { MagazineModel } from '../models/magazine.model';
import { MagazineCarouselComponent } from '../components/magazine-carousel/magazine-carousel.component';
import { MagazineService } from '../services/magazine-service/magazine.service';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.sass']
})
export class GridComponent implements OnInit {

  @Input('category') category: string;
  private magazines: Array<MagazineModel>;


  constructor( private magazineService: MagazineService) {
  }

  ngOnInit() {
    console.log(this.magazines);
  }

  getMagazines(CategoryoIdoLoquesea) {
    //hacer un get de los magazines dependiendo del id o tipo o categoria que me pasen como parametro
    this.magazineService.getMagazinesByProperty('category', this.category).subscribe(
      magazines => {
        this.magazines = magazines;
      }
    );
  }

}
