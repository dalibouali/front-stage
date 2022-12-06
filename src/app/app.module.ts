import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { HeaderComponent } from './shared/components/header/header.component';
import {
  HttpClient,
  HttpClientModule,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';
import { SignupComponent } from './user/components/signup/signup.component';
import { SignupComponent as  EnSignupComponent} from './entreprise/components/signup/signup.component';
import { FormsModule } from '@angular/forms';
import { CvComponent } from './user/components/cv/cv.component';
//import { UserprofileComponent } from './user/userprofile/userprofile.component';

import { ListofferComponent } from './offre/components/listoffer/listoffer.component';

import { LoginComponent } from './shared/components/login/login.component';
import { MyoffersComponent } from './entreprise/components/myoffers/myoffers.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { MakeofferComponent } from './entreprise/components/makeoffer/makeoffer.component';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { AuthInterceptor } from './auth.intercepter';
import { ListUserComponent } from './user/components/list-user/list-user.component';
import { DetailsOfferComponent } from './entreprise/components/details-offer/details-offer.component';
import { ListEntreprisesComponent } from './entreprise/components/list-entreprises/list-entreprises.component';
import { DetailsComponent } from './offre/components/details/details.component';
import { DashboardComponent } from './user/components/dashboard/dashboard.component';
import { DashboardComponent as EnDashboardComponent } from './entreprise/components/dashboard/dashboard.component';
import { RequestsComponent } from './entreprise/components/requests/requests.component';

import { UserprofileComponent } from './user/components/userprofile/userprofile.component';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { ResumeComponent } from './resume/resume.component';
import { InternshipsComponent } from './user/components/internships/internships.component';
import { EntrepriseprofileComponent } from './entreprise/components/entrepriseprofile/entrepriseprofile.component';
import {MatChipsModule} from '@angular/material/chips';
import { DetailEntrepriseComponent } from './entreprise/components/detail-entreprise/detail-entreprise.component';
import {Ng2SearchPipeModule} from 'ng2-search-filter'
import { IndexComponent } from './home/components/index/index.component';
import { RecommendedComponent } from './user/components/recommended/recommended.component';
import { ApplicationsComponent } from './user/components/applications/applications.component';
//import { ViewCVComponent } from './Stage/stagi.tn/src/app/user/components/view-cv/view-cv.component';
import { NgSelectModule } from '@ng-select/ng-select';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SignupComponent,

    LoginComponent,
    MyoffersComponent,
    MakeofferComponent,
    ListUserComponent,
    DetailsOfferComponent,
    ListEntreprisesComponent,
    DetailsOfferComponent,
    DetailsComponent,
    DashboardComponent,
    CvComponent,
    UserprofileComponent,
    ListofferComponent,
    RequestsComponent,



    CvComponent,
    UserprofileComponent,
    ResumeComponent,
    InternshipsComponent,
    EnDashboardComponent,
    EnSignupComponent,
    EntrepriseprofileComponent,
    DetailEntrepriseComponent,
    IndexComponent,
    RecommendedComponent,
    ApplicationsComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxMatSelectSearchModule,
    BrowserAnimationsModule,
    MatDialogModule,
    NgxExtendedPdfViewerModule,
    PdfViewerModule,
    MatChipsModule,
    Ng2SearchPipeModule,
    NgSelectModule




  ],

  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
   
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
