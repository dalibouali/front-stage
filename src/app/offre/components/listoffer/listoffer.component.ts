import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OffreService } from '../../services/offre.service';

@Component({
  selector: 'app-listoffer',
  templateUrl: './listoffer.component.html',
  styleUrls: ['./listoffer.component.css']
})
export class ListofferComponent implements OnInit {

  constructor(private offreService: OffreService, private router: Router) { }

  ngOnInit(): void {
    this.getoffers()
    this.getentreprises()
  }

  searchText:any
  ListOffers: any
  ListEntreprises: any

  //get All Offers
  getoffers(): void {
    this.offreService.getoffers().subscribe(
      data => {
        this.ListOffers = data
        for(let offer of this.ListOffers){
          console.log("id"+offer.entrepriseId)
          this.offreService.getEntrepriseById(offer.entrepriseId).subscribe({
            next:data=>{
              offer.entreprise=data
              offer.enrepriselogo = offer.entreprise.logo;
              offer.enrepriselogo = offer.enrepriselogo.split('\\');
              //console.log(this.Imagename);
              offer.enrepriselogo =
                'assets/img/pdp/' + offer.enrepriselogo[offer.enrepriselogo.length - 1];
                       },
            error:err=>{
              console.log(err)
            }
          }
           
          )
        }
        console.log(this.ListOffers)
      },
      error => {
        console.log(error)
      }
    )

    console.log(this.ListOffers)


  }
  //get entreprises by Id
  getentreprise(id: number): void {
    this.offreService.getEntrepriseById(id).subscribe(
      data => {
        console.log(data);

      },
      error => {
        console.log(error)
      }
    )


  }
  //get all entreprises
  getentreprises(): void {
    this.offreService.getEntreprises().subscribe(
      data => {
        this.ListEntreprises = data
        for (let entreprise of this.ListEntreprises){
          
          entreprise.ImageUrl= entreprise.logo.split('\\');
        //console.log(this.Imagename);
        entreprise.ImageUrl =
          // '\\assets\\img\\pdp\\' + this.Imagename[this.Imagename.length - 1];
          'assets/img/pdp/' + entreprise.ImageUrl[entreprise.ImageUrl.length - 1];

        }
        

      },
      error => {
        console.log(error)
      }
    )


  }
  //get offer details
  getOffersdetails(id: number): void {

    this.router.navigate(["detailsOffer/", id])


  }
  


}
