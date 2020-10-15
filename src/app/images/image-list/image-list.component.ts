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
import { AngularFireStorage } from '@angular/fire/storage';

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
  jpg: string;
  heroes: any;

  // uploadPercentage$: Observable<number>;
  // files$: Observable<File[]>;
  // heroes: any;

  constructor(private service: ImageService,
              public authService: AuthService,
              public router: Router,
              public ngZone: NgZone,
              public afAuth: AngularFireAuth,
              private httpClient: HttpClient,
              public afs: AngularFirestore,
              private storage: AngularFireStorage,)
              {}


            searchText;


  ngOnInit() {
    // console.log(this.storage.ref('/6LK1lJskGahYP0MpdU1l30sK8bn2/09700ae2-79fe-4d1e-8f3c-59e04e613faf/viktor-ritsvall-FWJinfDsIn8-unsplash.jpg_1602780848962').getDownloadURL().toPromise());
    var storage = firebase.storage();
    var httpsReference = storage.refFromURL('https://firebasestorage.googleapis.com/v0/b/image-gallery-test-99c89.appspot.com/o/eb9eb4a5-9787-44fb-b3ea-92b3748ee951%2FFood%2Fwhitney-wright-6G98hiCJETA-unsplash.jpg');
    // console.log(httpsReference);
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
        // console.log(this.rowIndexArray);
        // this.rowIndexArray = Array.from(Array( Math.ceil(this.imageList.length / 4 )).keys());


        // for (let i = 0; i <= this.rowIndexArray.length; i++ ) {
        //   console.log(i);

        // this.heroes = [
        //   { id: 0, name: this.imageList[0].caption , country: this.rowIndexArray[0].imageUrl},
        //   { id: 1, name: this.imageList[1].caption ,country: this.rowIndexArray[1].imageUrl},
        //   { id: 2, name: this.imageList[2].caption , country: this.rowIndexArray[2].imageUrl},
        //   { id: 3, name: this.imageList[3].caption , country: this.rowIndexArray[3].imageUrl},
        //   { id: 4, name: this.imageList[4].caption , country: this.rowIndexArray[4].imageUrl},
        //   { id: 5, name: this.imageList[5].caption , country: this.rowIndexArray[5].imageUrl},
        //   { id: 6, name: this.imageList[6].caption , country: this.rowIndexArray[6].imageUrl},
        //   { id: 7, name: this.imageList[7].caption , country: this.rowIndexArray[7].imageUrl},
        //   { id: 8, name: this.imageList[8].caption , country: this.rowIndexArray[8].imageUrl},
        //   { id: 9, name: this.imageList[9].caption , country: this.rowIndexArray[9].imageUrl},
        //   { id: 10, name: this.imageList[10].caption , country: this.rowIndexArray[10].imageUrl},
          // { id: 11, name: this.imageList[11].caption , },
          // { id: 12, name: this.imageList[12].caption , },
          // { id: 13, name: this.imageList[13].caption , },
          // { id: 14, name: this.imageList[14].caption , },
          // { id: 15, name: this.imageList[15].caption , },
          // { id: 16, name: this.imageList[16].caption , },
          // { id: 17, name: this.imageList[17].caption , },
          // { id: 18, name: this.imageList[18].caption , },
          // { id: 19, name: this.imageList[19].caption , },
          // { id: 20, name: this.imageList[20].caption , },
        // ];
      // }
      });


    // this.storage.child('images/stars.jpg').getDownloadURL().then(function(url) {
    //     // `url` is the download URL for 'images/stars.jpg'

    //     // This can be downloaded directly:
    //     var xhr = new XMLHttpRequest();
    //     xhr.responseType = 'blob';
    //     xhr.onload = function(event) {
    //       var blob = xhr.response;
    //     };
    //     xhr.open('GET', url);
    //     xhr.send();

    //     // Or inserted into an <img> element:
    //     var img = document.getElementById('myimg');
    //     img.src = url;
    //   }).catch(function(error) {
    //     // Handle any errors
    //   });


  }

  search(event: KeyboardEvent) {
    let fliterValue = '';
    if (event) {
      fliterValue = (event.target as HTMLInputElement).value;
    }}


}
