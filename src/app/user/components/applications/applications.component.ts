import { Component, OnInit } from '@angular/core';
import { OffreService } from 'src/app/offre/services/offre.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-applications',
  templateUrl: './applications.component.html',
  styleUrls: ['./applications.component.css']
})
export class ApplicationsComponent implements OnInit {
  Applications: any
  constructor(private userservice: UserService) { }

  ngOnInit(): void {
    this.getApllications(Number(window.localStorage.getItem('id')))
  }
  getApllications(id: number): void {
    this.userservice.getEntrepriseApplications(id).subscribe({
      next: data => {
        this.Applications = data
        console.log(this.Applications)
        for (let req of this.Applications) {

          this.userservice.getUser(req.userId).subscribe({
            next: data => {
              req.user = data
              req.user.logUrl = req.user.image;
              req.user.logUrl = req.user.logUrl.split('\\');
              //console.log(this.Imagename);
              req.user.logUrl =
                // '\\assets\\img\\pdp\\' + this.Imagename[this.Imagename.length - 1];
                'assets/img/pdp/' + req.user.logUrl[req.user.logUrl.length - 1];
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

  rejectApplication(id: number) {
    this.userservice.rejectApplication(id).subscribe({
      next: data => {
        alert("Application Rejected")
      },
      error: err => {
        console.log(err)
      }
    })

  }
  acceptApplication(id: number) {
    this.userservice.acceptApplication(id).subscribe({
      next: data => {
        alert("Application Accepted")
      },
      error: err => {
        console.log(err)
      }
    })

  }
}
