import { Component, OnInit, Input } from '@angular/core';
import { MagazineModel } from '../models/magazine.model';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.sass']
})
export class GridComponent implements OnInit {

  @Input('magazines') magazines: Array<string>;


  constructor() {
    this.magazines = ['1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', ];
  }

  ngOnInit() {
    console.log(this.magazines);
  }

  getMagazines(CategoryoIdoLoquesea) {
    //hacer un get de los magazines dependiendo del id o tipo o categoria que me pasen como parametro
  }

}
