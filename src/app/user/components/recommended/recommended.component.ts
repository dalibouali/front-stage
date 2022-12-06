import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { OfferService } from 'src/app/entreprise/components/offer.service';
import { OffreService } from 'src/app/offre/services/offre.service';
import { UserService } from '../../services/user.service';
var stringSimilarity = require('string-similarity');
@Component({
  selector: 'app-recommended',
  templateUrl: './recommended.component.html',
  styleUrls: ['./recommended.component.css']
})
export class RecommendedComponent implements OnInit {
  searchText:any
  User: any
  listOffers: any
  ListOffers:any
  recommandedOffers: any
  constructor(private userservice: UserService, private http: HttpClient, private offreservice: OffreService, private router :Router) { }

  ngOnInit(): void {
    // var stringSimilarity = require('string-similarity');
    this.userservice.getUser(Number(window.localStorage.getItem('id'))).subscribe({
      next: user => {
        this.userservice.getSemilarProfile(user.profile).subscribe({
          next: dta => {
            user.semilarprofiles = JSON.parse(JSON.stringify(dta))
            console.log(user)
            this.User = user
            this.offreservice.getoffers().subscribe({
              next: data => {
                this.getRecomandedOffers(this.User.semilarprofiles, data)
                // for (let offer of data) {
                //   this.userservice.getSemilarProfile(offer.title).subscribe({
                //     next: output => {

                //       offer.semilarProfiles = JSON.parse(JSON.stringify(output))

                //     },
                //     error: err => {
                //       console.log(err)
                //     }

                //   })
                // }
                this.listOffers = data
                console.log(this.listOffers)
              },
              error: err => {
                console.log(err)
              }

            })
          }

        })

      },
      error: err => {
        console.log(err)
      }
    })





  }

  // getRecommandedOffers(alloffers: any, allprofiles: any) {
  //   console.log(allprofiles)
  //   console.log(typeof allprofiles)
  //   for (let i of Object.keys(allprofiles)) {
  //     console.log(allprofiles[i])

  //     for (let j of Object.keys(alloffers)) {

  //       if (allprofiles[i] in alloffers[j].semilarprofiles) {
  //         this.recommandedOffers.push(alloffers[j])

  //       }

  //     }
  //   }
  //   console.log(this.recommandedOffers)

  // }

  getRecomandedOffers(allprofiles: any, alloffers: any) {
    //les profiles simiaires a mon profile
    var list = []
    
    for (let i of Object.keys(allprofiles)) {
      list.push(allprofiles[i])

    }
    this.ListOffers=[]
    for (let offer of alloffers) {
      var matches = stringSimilarity.findBestMatch(offer.title, list);
      var getSimilar = [];

      for (var i in matches.ratings) {

        if (matches.ratings[i].rating > 0.4) {

          getSimilar.push(matches.ratings[i].target);

        }
      }
      
      if (getSimilar.length != 0) {
       this.ListOffers.push(offer)
      }
      
      


    }
    console.log("/////////////",this.ListOffers)
  }
   //get entreprises by Id
   getentreprise(id: number): void {
    this.offreservice.getEntrepriseById(id).subscribe(
      data => {
        console.log(data);

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