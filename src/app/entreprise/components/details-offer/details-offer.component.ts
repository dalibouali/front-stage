import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { OfferService } from '../offer.service';


@Component({
  selector: 'app-details-offer',
  templateUrl: './details-offer.component.html',
  styleUrls: ['./details-offer.component.css']
})
export class DetailsOfferComponent implements OnInit {
  id: any
  offer: any
  subject: any
  begin_date: any
  end_date: any
  entrepriseId: any
  technologies: any

  ListTechnologies = ["Spring Boot", "Angular", "Django", "Python", "Java", "Spring", ".Net", "C", "c#", "C++", "Machine Learning", "Hibernate", "ORM", "MySQL", "PostgreSql"]






  constructor(@Inject(MAT_DIALOG_DATA) public data: Object, private offerserv: OfferService) {
    this.id = data;
    console.log(this.id)


  }

  ngOnInit(): void {
    this.getOffer(this.id["id"])

  }

  getOffer(id: number) {
    this.offerserv.getOfferByID(id).subscribe(
      data => {
        this.offer = data
        this.subject = this.offer.subject
        this.begin_date = this.offer.begin_date


        console.log(this.offer)
      },
      err => console.log(err)
    )


  }
  updateOffer(id:number,form:any){
    this.offerserv.updateOffer(id,form).subscribe({
      next:data=>{
        console.log("data")
      },
      error:err=>{
        console.log(err),
        alert("these offer cannt been updated")
      }
    })
  }
}
