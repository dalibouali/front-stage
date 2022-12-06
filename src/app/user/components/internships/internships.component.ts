import { Component, OnInit } from '@angular/core';
import { async } from 'rxjs';

import { OffreService } from 'src/app/offre/services/offre.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-internships',
  templateUrl: './internships.component.html',
  styleUrls: ['./internships.component.css']
})
export class InternshipsComponent implements OnInit {
  ListRequest: any
  Entreprise: any
  CurrentUser: any
  Applications: any

  constructor(private userservice: UserService, private offreService: OffreService) { }

  ngOnInit(): void {


    this.getRequestByUser(Number(window.localStorage.getItem('id')))
    this.getApllications(Number(window.localStorage.getItem('id')))
  }

  getRequestByUser(id: number) {
    this.userservice.getRequestByUser(id).subscribe({
      next: (data) => {
        this.ListRequest = data

        for (let req of this.ListRequest) {

          this.offreService.getEntrepriseById(req.offer.entrepriseId).subscribe({
            next: data => {
              req.entreprise = data
              req.entreprise.logUrl = req.entreprise.logo;
              req.entreprise.logUrl = req.entreprise.logUrl.split('\\');
              //console.log(this.Imagename);
              req.entreprise.logUrl =
                // '\\assets\\img\\pdp\\' + this.Imagename[this.Imagename.length - 1];
                'assets/img/pdp/' + req.entreprise.logUrl[req.entreprise.logUrl.length - 1];
            },
            error: err => {
              console.log(err)
            }
          })





        }


      },
      error: (err) => {
        console.log(err)
      }
    })

  }
  getEntrepriseById(id: number): void {
    this.offreService.getEntrepriseByIdAsUser(id).subscribe(
      data => {
        console.log(data)
        this.Entreprise = data


      },
      error => {
        console.log(error)
      }
    )
  }
  getApllications(id: number): void {
    this.userservice.getuserApplications(id).subscribe({
      next: data => {
        this.Applications = data
        console.log(this.Applications)
        for (let req of this.Applications) {

          this.offreService.getEntrepriseById(req.entrepriseId).subscribe({
            next: data => {
              req.entreprise = data
              req.entreprise.logUrl = req.entreprise.logo;
              req.entreprise.logUrl = req.entreprise.logUrl.split('\\');
              //console.log(this.Imagename);
              req.entreprise.logUrl =
                // '\\assets\\img\\pdp\\' + this.Imagename[this.Imagename.length - 1];
                'assets/img/pdp/' + req.entreprise.logUrl[req.entreprise.logUrl.length - 1];
            },
            error: err => {
              console.log(err)
            }
          })





        }
      },
      error: err => {
        console.log(err)
      }
    })
  }

  deleteApplication(id: number) {
    this.userservice.deleteApplication(id).subscribe({
      next: data => {
        console.log(data)
        alert("Applicatrion deleted ")
      },
      error: err =>
        console.log(err)

    })
  }


}
