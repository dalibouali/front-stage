import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './components/signup/signup.component';

import { FormsModule } from '@angular/forms';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';

import { MatChipsModule } from '@angular/material/chips';
import { DetailEntrepriseComponent } from './components/detail-entreprise/detail-entreprise.component';





@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgxMatSelectSearchModule,
    MatChipsModule
   
    

  ]
})
export class EntrepriseModule { }
