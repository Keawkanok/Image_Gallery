// import { Validators } from '@angular/forms';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ImageService } from '../../chared/image.service';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent implements OnInit {
  // tslint:disable-next-line: ban-types
  imgSrc: string ;
  selectedImage: any = null;
  // tslint:disable-next-line: ban-types
  isSubmitted = false;
  snapshot: Observable<any>;
  percentage: Observable<number>;

formTemplate = new FormGroup({
  caption: new FormControl('', Validators.required),
  category: new FormControl(''),
  imageUrl: new FormControl('', Validators.required),

});

  constructor(private storage: AngularFireStorage , private service: ImageService) { }

  ngOnInit(){
    this.resetForm();
  }

  // image
  // tslint:disable-next-line: typedef
  showPreview(event: any) {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e: any) => this.imgSrc = e.target.result;
      reader.readAsDataURL(event.target.files[0]);
      this.selectedImage = event.target.files[0];
    } else {
      this.imgSrc = '/assets/img/image_placeholder.jpg';
      this.selectedImage = null;
    }
  }

  // Submit
  // tslint:disable-next-line: typedef
  onSubmit(formValue) {
    this.isSubmitted = true;
    if (this.formTemplate.valid) {
      const filePath = `${formValue.category}/${this.selectedImage.name}_${new Date().getTime()}`;
      const fileRef = this.storage.ref(filePath);
      this.storage.upload(filePath, this.selectedImage).snapshotChanges().pipe(
        finalize(() => {
          fileRef.getDownloadURL().subscribe((url) => {
            formValue.imageUrl = url;
            this.service.insertImageDetails(formValue);
            this.resetForm();
            console.log(filePath + " เข้าไป firebase แล้ว" );
            console.log(formValue);
            // console.log(fileRef);
            // console.log(this.storage);
          });
        })
      ).subscribe();
    }
   }

  // tslint:disable-next-line: typedef
  get formControls() {
    return this.formTemplate.controls;
  }

  resetForm() {
    this.formTemplate.reset();
    this.formTemplate.setValue({
      caption: '',
      imageUrl: '',
      category: 'Animal',
    });
    this.imgSrc = '/assets/img/image_placeholder.jpg';
    this.selectedImage = null;
    this.isSubmitted = false;
  }

  // isActive(snapshot) {
  //   return snapshot.state === 'running' && snapshot.bytesTransferred < snapshot.totalBytes;
  // }
}
