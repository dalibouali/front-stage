import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EntrepriseService {

  constructor(private http: HttpClient) { }

  getUserByEmail(email: string): Observable<any> {
    return this.http.get('http://localhost:8081/api-entreprise/get-entreprise/' + email);
  }
  getEntrepriseById(id:number):Observable<any>{
    return this.http.get('http://localhost:8081/api-entreprise/get-entreprise-by-id/' + id);
  }
  getEntrepriseByIdAsUser(id:number):Observable<any>{
    return this.http.get('http://localhost:9090/api-user/getEntreprise/' + id);
  }
}
