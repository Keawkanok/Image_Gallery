import { ImageService } from '../../chared/services/image.service';
import { AuthService } from '../../chared/services/auth.service';
// import * as firebase from '';
import { NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';

import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';

@Component({
  selector: 'app-image-list',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.scss']
})
export class ImageListComponent implements OnInit {

  imageList: any[];
  id: any[];
  rowIndexArray: any[];
  userProfileImg: any;
  imageUrls: any[];
  // jpg: string;


  // uploadPercentage$: Observable<number>;
  // files$: Observable<File[]>;
  // heroes: any;

  constructor(private service: ImageService,
              public authService: AuthService,
              public router: Router,
              public ngZone: NgZone,
              public afAuth: AngularFireAuth,
              private httpClient: HttpClient,
              public afs: AngularFirestore,)
              {}

  ngOnInit() {
    this.service.imageDetailList.snapshotChanges().subscribe(
      list => {
        this.id = list.map(ids => {
          // console.log("ids", ids.key)
          return ids.key;
        });
        this.imageUrls = list.map(imageurl => {
          // console.log("Url", imageurl.payload.val());
          return imageurl.payload.val();
        });
        this.imageList = list.map(item => {
          // console.log("test", item.key);
          return item.payload.val();
        });
        this.rowIndexArray = Array.from(Array( Math.ceil(this.imageList.length)).keys());
        // console.log(this.imageList[0].imageUrl);
        // console.log(this.imageList);
        // console.log(this.imageList[key].imageUrl);
        // console.log(this.imageList[0].caption);
        // console.log(this.imageList[0].id);
        // console.log(this.imageList);
        // this.rowIndexArray = Array.from(Array( Math.ceil(this.imageList.length / 4 )).keys());

      });
  }


  downloadImage(img){
    const imgUrl = img.src;
    console.log(imgUrl , ' imgUrl');
    const imgName = imgUrl.substr(imgUrl.lastIndexOf('/') + 1);
    this.httpClient.get(imgUrl, {responseType: 'jpg' as 'json'})
    .subscribe((res: any) => {
      const file = new Blob([res], {type: res.type});

      // IE
      if (window.navigator && window.navigator.msSaveOrOpenBlob) {
        window.navigator.msSaveOrOpenBlob(file);
        return;
      }

      const blob = window.URL.createObjectURL(file);
      const link = document.createElement('a');
      link.href = blob;
      link.download = imgName;
      console.log(link.download,' imagedownload');
      console.log(imgName, ' imagename');

      // Version link.click() to work at firefox
      link.dispatchEvent(new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
        view: window
      }));

      setTimeout(() => { // firefox
        window.URL.revokeObjectURL(blob);
        link.remove();
      }, 100);
    });
  }


}
