import { Component, OnInit } from '@angular/core';
import { ImageService } from '../chared/services/image.service';


@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  // styleUrls: ['./show.component.scss']
})
export class ShowComponent implements OnInit {

  constructor(public service: ImageService) { }

  ngOnInit() {
    this.service.getImageDetailList();
  }

}
