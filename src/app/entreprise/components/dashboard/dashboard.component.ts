import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { UserService } from 'src/app/user/services/user.service';
import { EntrepriseService } from '../../entreprise.service';
import { OfferService } from '../offer.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  entreprise:any;
  ImageUrl:any;
  Imagename:any
  ListOffers:any

  constructor(
    private entrepriseService: EntrepriseService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private offerservice:OfferService
  ) { }

  ngOnInit(): void {
    
    this.getOffers()
    this.activatedRoute.paramMap.subscribe({
      next: (p: ParamMap) => {
        
        this.entrepriseService.getEntrepriseById(Number(p.get('id'))).subscribe(
          (data: any) => {
            this.entreprise = data;
        
           
            this.ImageUrl = this.entreprise.logo;
            this.Imagename = this.ImageUrl.split('\\');
            //console.log(this.Imagename);
            this.ImageUrl =
              'assets/img/pdp/' + this.Imagename[this.Imagename.length - 1];
            console.log('imageURL:', this.ImageUrl);
            this.entreprise.logoUrl=this.ImageUrl
            console.log('data', this.entreprise);
           
          },
          (err: any) => {
            console.log(err);
          }
        );
      },
    });

    //this.router.navigateByUrl('/');
  }

  getOffers() {

    return this.offerservice.getOffers().subscribe(
      data => {
        console.log(data);
        this.ListOffers = data;
      },
      error => {
        console.log(error);
        {

        }
      }
    )
  }

}
