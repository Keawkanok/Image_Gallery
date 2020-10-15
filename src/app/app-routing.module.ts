import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ImagesComponent } from './images/images.component';
import { ImageComponent } from './images/image/image.component';
import { ImageListComponent } from './images/image-list/image-list.component';
// import { UploadComponent } from './upload/upload.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AuthGuard } from './chared/guared/auth.guard';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';

import { ShowComponent } from './images/show.component';
import { ImageDetailComponent } from './image-detail/image-detail.component';
import { ImageDetailsComponent } from './images/image-details.component';
import { ImageListsComponent } from './images/image-list/image-lists.component';




const routes: Routes = [

  // users
  { path: '', redirectTo: 'image/home', pathMatch: 'full'},
  { path: 'image/home/:id', component: ImageDetailComponent, canActivate: [AuthGuard] },
  { path: 'image', component: ImagesComponent , canActivate: [AuthGuard] , children: [
  { path: 'home', component: ImageListComponent,  canActivate: [AuthGuard] },
]},

  { path: 'image/test/:id', redirectTo: 'image/test/:id', pathMatch: 'full'},
  { path: 'test', component: ImageDetailComponent , canActivate: [AuthGuard], children: [
  { path: 'image', component: ImageListComponent, canActivate: [AuthGuard] },
]},

  { path: 'upload', component: ImageComponent , canActivate: [AuthGuard] },

  // admin
  { path: '', redirectTo: 'show/image', pathMatch: 'full'},
  { path: 'show', component: ShowComponent , children: [
  { path: 'image', component: ImageListComponent },
]},

  { path: 'show/image/:id', redirectTo: 'show/image/:id', pathMatch: 'full'},
  { path: 'show/image/:id', component: ImageDetailsComponent, children: [
  { path: '', component: ImageListsComponent },
]},

  { path: 'tests/image', redirectTo: 'tests/image', pathMatch: 'full'},
//   { path: 'photo', component: ImageDetailsComponent , children: [
  { path: 'tests' , component: ImageDetailsComponent , children: [
  { path: 'image', component: ImageListComponent },
]},


  { path: 'sign-in', component: SignInComponent },
  { path: 'register-user', component: SignUpComponent},
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'verify-email-address', component: VerifyEmailComponent },
  // { path: '**', component: PageNotFoundComponent }, // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
