import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './user/components/signup/signup.component';
import { SignupComponent as EnSignupComponent } from './entreprise/components/signup/signup.component';
import { IndexComponent } from './home/components/index/index.component';
import { LoginComponent } from './shared/components/login/login.component';

import { ListofferComponent } from './offre/components/listoffer/listoffer.component';
import { DashboardComponent } from './user/components/dashboard/dashboard.component';
import { DashboardComponent as EnDashboardComponent } from './entreprise/components/dashboard/dashboard.component';
import { MyoffersComponent } from './entreprise/components/myoffers/myoffers.component';
import { ListUserComponent } from './user/components/list-user/list-user.component';
import { DetailsOfferComponent } from './entreprise/components/details-offer/details-offer.component';
import { ListEntreprisesComponent } from './entreprise/components/list-entreprises/list-entreprises.component';
import { DetailsComponent } from './offre/components/details/details.component';

import { CvComponent } from './user/components/cv/cv.component';
import { RequestsComponent } from './entreprise/components/requests/requests.component';
import { UserprofileComponent } from './user/components/userprofile/userprofile.component';
import { ResumeComponent } from './resume/resume.component';
import { InternshipsComponent } from './user/components/internships/internships.component';
import { EntrepriseprofileComponent } from './entreprise/components/entrepriseprofile/entrepriseprofile.component';
import { DetailEntrepriseComponent } from './entreprise/components/detail-entreprise/detail-entreprise.component';
import { RecommendedComponent } from './user/components/recommended/recommended.component';
import { ApplicationsComponent } from './user/components/applications/applications.component';

//import { ViewCVComponent } from './user/components/view-cv/view-cv.component';

const routes: Routes = [
  { path: 'us-signup', component: SignupComponent },
  { path: 'en-signup', component: EnSignupComponent },
  { path: 'log-in', component: LoginComponent },
  { path: 'offerlist', component: ListofferComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '', component: IndexComponent },

  { path: 'us-signup', component: SignupComponent },
  { path: 'en-signup', component: EnSignupComponent },
  { path: 'log-in', component: LoginComponent },
  { path: 'offerlist', component: ListofferComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '', component: IndexComponent },

  { path: 'myoffers', component: MyoffersComponent },
  { path: 'listUser', component: ListUserComponent },
  { path: 'details', component: DetailsOfferComponent },
  { path: 'listEntreprises', component: ListEntreprisesComponent },

  { path: 'detailsOffer/:id', component: DetailsComponent },
  { path: 'addcv', component: CvComponent },

  { path: 'userprofile/:id', component: UserprofileComponent },
  { path: 'requests/:id', component: RequestsComponent },

  { path: 'myoffers', component: MyoffersComponent },
  { path: 'listUser', component: ListUserComponent },
  { path: 'details', component: DetailsOfferComponent },

  { path: 'us-signup', component: SignupComponent },
  { path: 'en-signup', component: EnSignupComponent },
  { path: 'log-in', component: LoginComponent },
  { path: '', component: IndexComponent },
  { path: 'addcv', component: CvComponent },
  { path: 'userprofile/:id', component: UserprofileComponent },
  { path: 'user/dashboard/:id', component: DashboardComponent },
  { path: 'resume', component: ResumeComponent },
  { path: 'recommanded', component: RecommendedComponent },
  // { path: 'user/dashboard/viewcv/:cvname', component: ViewCVComponent },
  { path: 'requests', component: InternshipsComponent },
  { path: 'entreprise/dashboard/:id', component: EnDashboardComponent },
  { path: 'entrepriseprofile/:id', component: EntrepriseprofileComponent },
  {path: 'entreprisedetails/:id', component: DetailEntrepriseComponent},
  
  { path: 'applications', component: ApplicationsComponent },

 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
