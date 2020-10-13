import { Component, OnInit } from '@angular/core';
import { ImageService } from '../chared/services/image.service';


@Component({
  selector: 'app-image-details',
  templateUrl: './image-details.component.html',
  styleUrls: ['./image-details.component.scss']
})
export class ImageDetailsComponent implements OnInit {

  imageList: any;
  id: any;
  rowIndexArray: any;
  imageUrl: any;

  constructor(public service: ImageService) { }

  ngOnInit() {
    this.service.getImageDetailList();
    this.service.imageDetailList.snapshotChanges().subscribe(
      list => {
        this.id = list.map(ids => {
          // console.log("test", ids.key);
          return ids.key;
        });
        this.imageUrl = list.map(imageUrls => {
          // console.log("test", imageUrls.key);
          // console.log("test", imageUrls.prevKey);
          return imageUrls.type;
        });
        this.imageList = list.map(item => {
          // console.log("test", item.imageUrl);
          return item.payload.val();
        });
        this.rowIndexArray = Array.from(Array( Math.ceil(this.imageList.length)).keys());
        // console.log(this.imageList);
    // console.log(this.service);
    });
  }

}
