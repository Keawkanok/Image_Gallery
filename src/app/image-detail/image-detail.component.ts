import { Component, OnInit } from '@angular/core';
import { ImageService } from '../chared/services/image.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-image-detail',
  templateUrl: './image-detail.component.html',
  styleUrls: ['./image-detail.component.scss']
})
export class ImageDetailComponent implements OnInit {

  // private imageUrl = '';
  // imageList: any[];
  constructor(public service: ImageService) { }

  // getImageUrl(key: string) {
  //   this.service.getImage(key)
  //   .then(imageDetailList => this.imageUrl = imageDetailList.imageUrl);
  //   // .then(imageUrl => (console.log(imageUrl)));


  // }

  ngOnInit() {
    this.service.getImageDetailList();
  }

}
