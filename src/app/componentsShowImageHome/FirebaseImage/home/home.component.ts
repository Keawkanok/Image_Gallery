import { Component, OnInit } from '@angular/core';
import { ImageService } from '../../../chared/services/image.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  imageList: any[];
  rowIndexArray: any[];

  constructor(private service: ImageService) { }

  ngOnInit() {
    this.service.imageDetailList.snapshotChanges().subscribe(
      list => {
        this.imageList = list.map(item => {
          return item.payload.val();
        });
        this.rowIndexArray = Array.from(Array( Math.ceil(this.imageList.length / 4 )).keys());
      });
  }

}
