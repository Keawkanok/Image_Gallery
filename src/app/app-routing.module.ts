import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ImagesComponent } from './images/images.component';
import { ImageComponent } from './images/image/image.component';
import { ImageListComponent } from './images/image-list/image-list.component';
import { UploadComponent } from './upload/upload.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';




const routes: Routes = [
  { path: '', redirectTo: 'image/home', pathMatch: 'full'},
  { path: 'image', component: ImagesComponent, children: [
  { path: 'home', component: ImageListComponent },
  { path: 'upload', component: ImageComponent },
  // { path: 'Uploads', component: UploadComponent },
]},
  { path: 'upload', component: ImageComponent },
  { path: 'login', component: LoginComponent},
  { path: 'image/home', component: ImageListComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
