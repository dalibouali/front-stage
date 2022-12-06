import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OffreService } from '../../services/offre.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  user: any
  useremail = window.localStorage.getItem('USER');
  id: any
  offer: any
  entrepriseId: any
  Entreprise: any
  constructor(private offreService: OffreService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getOffersdetails()
    this.getcurrentUser()

  }
  //get offer details


  getOffersdetails(): void {
    this.route.paramMap.subscribe(paramMap => {
      this.id = paramMap.get('id');
    })
    console.log(this.id)

    this.offreService.getofferById(this.id).subscribe(
      data => {
        this.offer = data
        this.entrepriseId = data.entrepriseId
        console.log(this.entrepriseId)
        this.getEntrepriseById(this.entrepriseId)

      },
      error => {
        console.log(error)
      }
    )

  }
  getEntrepriseById(id: number): void {
    this.offreService.getEntrepriseByIdAsUser(id).subscribe(
      data => {
        console.log(data)
        this.Entreprise = data
        
        this.Entreprise.enrepriselogo = this.Entreprise.logo;
        this.Entreprise.enrepriselogo = this.Entreprise.enrepriselogo.split('\\');
        //console.log(this.Imagename);
        this.Entreprise.enrepriselogo =
          'assets/img/pdp/' + this.Entreprise.enrepriselogo[this.Entreprise.enrepriselogo.length - 1];


      },
      error => {
        console.log(error)
      }
    )
  }

  makerequest(offerid: number): void {
    this.offreService.makerequest(offerid, this.user.id).subscribe({
      next: (data) => {
        console.log(data)
        alert("your application request have been submitted successfully")

      },
      error: (err) => {
        console.log(err);
      }


    }

    )
  }
  getcurrentUser(): void {
    if (this.useremail != null) {
      this.offreService.getCurrentuser(this.useremail).subscribe({
        next: (data) => {
          this.user = data
          console.log("User Id "+this.user.id)
        },
        error: (err) => {
          console.log(err)
        }
      });


    }

  }
}
