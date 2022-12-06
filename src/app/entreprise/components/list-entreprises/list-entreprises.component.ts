import { Component, OnInit } from '@angular/core';
import { OffreService } from 'src/app/offre/services/offre.service';


@Component({
  selector: 'app-list-entreprises',
  templateUrl: './list-entreprises.component.html',
  styleUrls: ['./list-entreprises.component.css']
})
export class ListEntreprisesComponent implements OnInit {
  ImageUrl:any;
  Imagename:any
  constructor(private offerservice: OffreService) { }
SearchByName:any
SearchByType:any
  ngOnInit(): void {
    this.getentreprises()
  }

  ListEntreprises: any
  //get all entreprisese
  getentreprises(): void {
    this.offerservice.getEntreprises().subscribe(
      data => {
        this.ListEntreprises = data
        
        for(let entreprise of this.ListEntreprises){
          this.ImageUrl = entreprise.logo;
          this.Imagename = this.ImageUrl.split('\\');
          //console.log(this.Imagename);
          this.ImageUrl =
            'assets/img/pdp/' + this.Imagename[this.Imagename.length - 1];
          console.log('imageURL:', this.ImageUrl);
          entreprise.logoUrl=this.ImageUrl
          
        }
        console.log(this.ListEntreprises)

      },
      error => {
        console.log(error)
      }
    )

  }
}
