import { ImageService } from '../chared/services/image.service';
import { AuthService } from '../chared/services/auth.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.scss']
})
export class ImagesComponent implements OnInit {

  private imageUrl = '';

  constructor(public service: ImageService, private imageService: ImageService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.service.getImageDetailList();
    // this.getImageUrl(this.route.snapshot.params['id']);
  }

  // getImageUrl(key: string) {
  //   this.imageService.getImage(key)
  //   .then(image => this.imageUrl = image.url);
  // }

}
