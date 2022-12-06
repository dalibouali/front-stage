import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CVService {
  constructor(private http: HttpClient) {}

  addCv(file: any, id: any): Observable<any> {
    return this.http.post(
      'http://localhost:9090/api-user/uploadFile/' + id,
      file
    );
  }
  downloadCV(fileName: String): Observable<any> {
    return this.http.get(
      'http://localhost:9090/api-user/downloadFile/' + fileName
    );
  }
  downloadCVByUrl(filename: any, id: any): Observable<any> {
    console.log('filename', filename);
    console.log('id', id);
    return this.http.get(
      // 'http://localhost:9090/api-user/downloadFiles/' + filename + '/' + id
      'http://localhost:9090/api-user/downloadF/' + id
    );
  }

  // private baseUrl = 'http://localhost:9090/api-user/cv';

  // constructor(private http: HttpClient) {}

  // upload(file: File): Observable<HttpEvent<any>> {
  //   const formData: FormData = new FormData();

  //   formData.append('file', file);

  //   const req = new HttpRequest('POST', `${this.baseUrl}/upload`, formData, {
  //     reportProgress: true,
  //     responseType: 'json',
  //   });

  //   return this.http.request(req);
  // }

  // getFiles(): Observable<any> {
  //   return this.http.get(`${this.baseUrl}/files`);
  // }
}
