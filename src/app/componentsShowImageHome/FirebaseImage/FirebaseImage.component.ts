import { ImageService } from '../../chared/services/image.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-FirebaseImage',
  templateUrl: './FirebaseImage.component.html',
  styleUrls: ['./FirebaseImage.component.scss']
})
export class FirebaseImageComponent implements OnInit {

  constructor(private service: ImageService) { }

  ngOnInit() {
    this.service.getImageDetailList();
  }
}
