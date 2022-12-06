import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http:HttpClient) { }
  getOffers():Observable<any>{
    return this.http.get('http://18.208.236.138:8000/Offers/');
  }
}
