import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class OfferService {

  constructor(private http: HttpClient) {

  }


  makeOffer(form: any): Observable<any> {
    return this.http.post('http://localhost:8081/api-entreprise/makeoffer', form)

  }
  updateOffer(id:number,form: any): Observable<any> {
    return this.http.put('http://localhost:8081/api-entreprise/updateOffer/'+id, form)

  }
  getOffers(): Observable<any> {

    return this.http.get('http://localhost:8081/api-entreprise/offers')

  }
  getOfferByID(id: number): Observable<any> {

    return this.http.get('http://localhost:8081/api-entreprise/offer/' + id)

  }
  getrequestPerOffer(id:number): Observable<any> {

    return this.http.get('http://localhost:8081/api-entreprise/getRequestByOffer/' + id)

  }

  getUser(id: any): Observable<any> {
    return this.http.get('http://localhost:9090/api-user/get/' + id);
  }

  deleteOffer(id:number):Observable<any>
  {
    return this.http.delete('http://localhost:9099/offers/deletoffer/'+id)
  }
  confirmOffer(id:number):Observable<any>
  {
    return this.http.put('http://localhost:9099/request/confirm/'+id,null)
  }
  getRequestByUserAndOffer(iduser:number,idoffer:number):Observable<any>
  {
    return this.http.get('http://localhost:9099/request/getRequestByuserAndOffer/'+iduser+'/'+idoffer)
  }
  deleteRequest(id:number):Observable<any>
  {
    return this.http.delete('http://localhost:9099/request/delete/'+id)
  }
  getOfferByEntrepriseId(id:number):Observable<any>
  {
    return this.http.get('http://localhost:9099/offers/entrepriseoffer/'+id);
  }

  directapplication(identreprise:number,iduser:number):Observable<any>
  {
    return this.http.post('http://localhost:9099/spontaneousapplications/apply/enterprise/'+identreprise+'/'+iduser,null)
  }
}
