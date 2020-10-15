import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Firebase services + enviorment module
import { AngularFireModule } from '@angular/fire';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { ReactiveFormsModule } from "@angular/forms";
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireAnalyticsModule } from '@angular/fire/analytics';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from "@angular/fire/auth";


// App components
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImagesComponent } from './images/images.component';
import { ImageComponent } from './images/image/image.component';
import { ImageListComponent } from './images/image-list/image-list.component';
import { ForgotPasswordComponent } from '../app/components/forgot-password/forgot-password.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';
import { environment } from '../environments/environment';

// Auth service
import { AuthService } from "./chared/services/auth.service";


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { NavComponent } from './nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatSnackBarModule } from '@angular/material/snack-bar';

// bootstrap

import { CollapseModule } from "ngx-bootstrap/collapse";
import { TabsModule } from "ngx-bootstrap/tabs";
import { PaginationModule } from "ngx-bootstrap/pagination";
import { AlertModule } from "ngx-bootstrap/alert";
import { BsDatepickerModule } from "ngx-bootstrap/datepicker";
import { CarouselModule } from "ngx-bootstrap/carousel";
import { ModalModule } from "ngx-bootstrap/modal";
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';


import { ProgressbarModule } from "ngx-bootstrap/progressbar";
import { TooltipModule } from "ngx-bootstrap/tooltip";
import { PopoverModule } from "ngx-bootstrap/popover";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// import { ComponentsModule } from './components-navbar/components-navbar.module';

import { ShowComponent } from './images/show.component';


import { NbThemeModule, NbLayoutModule, NbSidebarModule, NbButtonModule, NbIconModule,
  NbInputModule, NbFormFieldModule   } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { ImageDetailComponent } from './image-detail/image-detail.component';
// import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ImageDetailsComponent } from './images/image-details.component';
import { TakepictureComponent } from './Takepicture/Takepicture.component';

import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  declarations: [
      AppComponent,
      ImagesComponent,
      ImageComponent,
      ImageListComponent,
      NavComponent,
      SignInComponent,
      SignUpComponent,
      DashboardComponent,
      ForgotPasswordComponent,
      VerifyEmailComponent,
      ShowComponent,
      ImageDetailComponent,
      ImageDetailsComponent,
      TakepictureComponent
   ],
  imports: [
      BrowserModule,
      AppRoutingModule,
      AngularFireModule.initializeApp(environment.firebaseConfig),
      AngularFireStorageModule,
      AngularFireDatabaseModule,
      ReactiveFormsModule,
      BrowserAnimationsModule,
      FormsModule,
      HttpClientModule,
      AngularFirestoreModule,
      AngularFireAnalyticsModule,
      AngularFireAuthModule,
      Ng2SearchPipeModule,

    MatSliderModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatDividerModule,
    MatSidenavModule,
    MatListModule,
    MatSlideToggleModule,
    LayoutModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    FlexLayoutModule,
    MatSnackBarModule,
    // bootstrap
    CollapseModule,
    TabsModule,
    PaginationModule,
    AlertModule,
    BsDatepickerModule,
    CarouselModule,
    ModalModule,
    ProgressbarModule,
    TooltipModule,
    PopoverModule,
    // BrowserAnimationsModule,
    BsDropdownModule,
    NgbModule,

    // ComponentsModule,

    // Nbbular
    NbThemeModule.forRoot({ name: 'default' }),
    NbLayoutModule,
    NbSidebarModule,
    NbButtonModule,
    NbIconModule,
    NbInputModule,
    NbFormFieldModule,
    NbEvaIconsModule

  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
