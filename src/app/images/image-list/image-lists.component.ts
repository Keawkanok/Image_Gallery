import { Component, OnInit } from '@angular/core';
import { ImageService } from 'src/app/chared/services/image.service';

@Component({
  selector: 'app-image-lists',
  templateUrl: './image-lists.component.html',
  // styleUrls: ['./image-lists.component.scss']
})
export class ImageListsComponent implements OnInit {

  imageList: any[];
  id: any[];
  rowIndexArray: any[];

  constructor(private services: ImageService) { }

  ngOnInit() {
    this.services.imageDetailList.snapshotChanges().subscribe(
      list => {
        this.id = list.map(ids => {
          return ids.key;
        });
        this.imageList = list.map(item => {
          // console.log("test", item.key);
          return item.payload.val();
        });
        this.rowIndexArray = Array.from(Array( Math.ceil(this.imageList.length)).keys());
        console.log(this.imageList);
        console.log(this.rowIndexArray);

        // this.rowIndexArray = Array.from(Array( Math.ceil(this.imageList.length / 4 )).keys());

      }
    );
  }

}
