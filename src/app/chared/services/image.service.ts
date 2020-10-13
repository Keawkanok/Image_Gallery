import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  imageDetailList: AngularFireList<any>;
  constructor(private firebase: AngularFireDatabase) { }

  getImageDetailList() {
    this.imageDetailList = this.firebase.list('imageDetails');
  }

  insertImageDetails(imageDetails) {
    this.imageDetailList.push(imageDetails);
    // this.imageDetailList.push(imageDetails);

  }

  // getImage(key: string) {
  //   return firebase.database().ref('imageDetails' + key).once('value')
  //   .then((snap) => snap.val());
  // }


}
