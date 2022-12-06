import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {}

  login(form: any): Observable<any> {
    return this.http.post('http://18.208.236.138:9004/auth/login', form);
  }
}
