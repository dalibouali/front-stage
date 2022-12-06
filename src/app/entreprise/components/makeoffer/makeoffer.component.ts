import { Component, OnInit } from '@angular/core';
import { OfferService } from '../offer.service';

@Component({
  selector: 'app-makeoffer',
  templateUrl: './makeoffer.component.html',
  styleUrls: ['./makeoffer.component.css']
})
export class MakeofferComponent implements OnInit {
  ListTechnologies = ["Spring Boot", "Angular", "Django", "Python", "Java", "Spring", ".Net", "C", "c#", "C++", "Machine Learning", "Hibernate", "ORM", "MySQL", "PostgreSql"]

  CustomTags:any
  constructor(private offerservice: OfferService) {

  }
  makeoffer(form: any) {
    console.log(this.CustomTags)
       console.log(form)
    return this.offerservice.makeOffer(form).subscribe(
      data => {
        console.log(data);
      },
      error => {

        {

        }
      }
    )
  }

 

  ngOnInit(): void {
    
  }


}
