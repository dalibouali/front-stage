import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../home.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  Offers: any

  constructor(private homeservice: HomeService) { }

  ngOnInit(): void {
    this.getOffers()
  }
  getOffers() {
    this.homeservice.getOffers().subscribe({
      next: data => {
        this.Offers = data.results;
        console.log(this.Offers)
      },
      error: err => {
        console.log(err)
      }
    })
  }

}
