import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { EntrepriseService } from '../../entreprise.service';
import { OfferService } from '../offer.service';

@Component({
  selector: 'app-detail-entreprise',
  templateUrl: './detail-entreprise.component.html',
  styleUrls: ['./detail-entreprise.component.css']
})
export class DetailEntrepriseComponent implements OnInit {

  entreprise: any;
  entrepriseImg: any;
  Imagename: any
  ListOffers: any

  constructor(
    private entrepriseService: EntrepriseService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private offerservice: OfferService
  ) { }

  ngOnInit(): void {


    this.activatedRoute.paramMap.subscribe({
      next: (p: ParamMap) => {
        this.getOffers(Number(p.get('id')))
        this.entrepriseService.getEntrepriseByIdAsUser(Number(p.get('id'))).subscribe(
          (data: any) => {
            this.entreprise = data;


            this.entrepriseImg = this.entreprise.logo;
            this.Imagename = this.entrepriseImg.split('\\');
            //console.log(this.Imagename);
            this.entrepriseImg =
              'assets/img/pdp/' + this.Imagename[this.Imagename.length - 1];
            console.log('imageURL:', this.entrepriseImg);
            this.entreprise.logoUrl = this.entrepriseImg
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

  getOffers(id: number) {

    return this.offerservice.getOfferByEntrepriseId(id).subscribe(
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

  apply(entrepriseid: number) {
    let userid = Number(window.localStorage.getItem('id'));
    return this.offerservice.directapplication(entrepriseid, userid).subscribe({
      next: data => {
        console.log(data)
        alert("application subbmitted")
      },
      error: err => console.log(err)
    })
  }

}
