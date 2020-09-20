import { ImageService } from '../chared/image.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.scss']
})
export class ImagesComponent implements OnInit {


  constructor(private service: ImageService) { }

  ngOnInit() {
    this.service.getImageDetailList();
  }

}
