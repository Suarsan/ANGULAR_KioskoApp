import { Component, OnInit } from '@angular/core';
import { MagazineModel } from '../models/magazine.model';
import { PublisherModel } from '../models/publisher.model';
import { MagazineService } from '../services/magazine-service/magazine.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  private currentMagazine: MagazineModel;
  private id: string | number;

  constructor( private magazineService: MagazineService ) { }

  ngOnInit() {
    this.currentMagazine = new MagazineModel("1", "NombreRevista", new PublisherModel("1", "EditorialRevista"), "Descripcion revista", ["tag1", "tag2"], ["thumbnail1", "thumbnail2"], ["downloadUrl1", "downloadUrl2"], ["contentUrl1", "contentUrl2"], 4);
    this.currentMagazine.Title = '1';
    this.getMagazine(1);
  }

  private getMagazine(id) {
    this.magazineService.get(id).subscribe(
      data => {
        this.currentMagazine = data;
      },
      err => {
        console.log('ERROR');
      }
    );
  }

}
