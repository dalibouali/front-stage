import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OffreService {

  constructor(private http:HttpClient) {

  }

  getoffers():Observable<any>
  {

   return this.http.get('http://localhost:9099/offers/alloffers')

  }
  getofferById(id:number):Observable<any>
  {

   return this.http.get('http://localhost:9099/offers/offer/'+id)

  }
  getEntrepriseById(id:number):Observable<any>
  {

   return this.http.get('http://localhost:9090/api-user/getEntreprise/'+id)

  }
  getEntrepriseByIdAsUser(id:number):Observable<any>
  {

   return this.http.get('http://localhost:9090/api-user/getEntreprise/'+id)

  }
  getEntreprises():Observable<any>
  {

   return this.http.get('http://localhost:9090/api-user/getEntreprises')

  }
  makerequest(offerid:number,userid:number):Observable<any>
  {
    return  this.http.post('http://localhost:9090/api-user/makerequest/'+offerid+'/'+userid,null)

  }

  getCurrentuser(username:string):Observable<any>
  {
    return this.http.get('http://localhost:9090/api-user/get-user/'+username);
  }
  

 
}
