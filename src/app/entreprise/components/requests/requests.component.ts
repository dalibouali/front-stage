import { Component, OnInit, TemplateRef } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { OfferService } from '../offer.service';


@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.css']
})
export class RequestsComponent implements OnInit {
  listRequest: any;
  id: any;

  constructor(private offerservice: OfferService, private activatedRoute: ActivatedRoute) { }


  ngOnInit(): void {
    this.getRequestPerOffer()

  }
  getRequestPerOffer() {
    this.activatedRoute.paramMap.subscribe({
      next: (p: ParamMap) => {
        this.id = p.get('id');
        return this.offerservice.getrequestPerOffer(this.id).subscribe({
          next: (data) => {
            
            this.listRequest = data;
            for(let l of this.listRequest ){
              this.offerservice.getUser(l.user_id).subscribe({
                next:(data)=>{
                  l.user=data
                  l.user.ImageUrl = l.user.image;
                  l.user.Imagename = l.user.ImageUrl.split('\\');
                  //console.log(this.Imagename);
                  l.user.ImageUrl =
                    // '\\assets\\img\\pdp\\' + this.Imagename[this.Imagename.length - 1];
                    'assets/img/pdp/' + l.user.Imagename[l.user.Imagename.length - 1];
                    this.offerservice.getRequestByUserAndOffer(l.user.id,l.id).subscribe({
                      next:data=>{
                        l.request=data
                      },
                      error:err=>{
                        console.log(err)
                      }
                    })
                }
              })
            }
            
            console.log(this.listRequest);
          },
          error: (error) => {
            console.log(error)

            {

            }
          },
        })
      }
    })
  }
  confimRequest(id:number){
    this.offerservice.confirmOffer(id).subscribe({
      next:data=>{
        alert("the Request has been accepted ")

      }
    })
  }
  deleteRequest(id:number){
    this.offerservice.deleteRequest(id).subscribe({
      next:data=>{
        alert("the Request has been deleteed ")

      }
    })
  }





}