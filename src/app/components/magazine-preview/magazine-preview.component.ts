import { Component, OnInit, Input } from '@angular/core';
import { MagazineModel } from '../../models/magazine.model';

@Component({
  selector: 'app-magazine-preview',
  templateUrl: './magazine-preview.component.html',
  styleUrls: ['./magazine-preview.component.css']
})
export class MagazinePreviewComponent implements OnInit {
  @Input() currentMagazine: MagazineModel;

  constructor() { }

  ngOnInit() {
  }

}
