import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { CVService } from '../cv/cv.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  userId: any;
  user: any;
  ImageUrl: any;
  Imagename: any;
  cvURL: any;
  cvName: any;
  url: any;
  testURL: any;
  iframeData: any;
  constructor(
    private userService: UserService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private cvservice: CVService
  ) {}

  // Download CV From Assets:
  // downloadCVFromAssets(): void {
  //   window.location.href = 'assets/img/pdp/' + this.cvName;
  // }

  //get file url
  // downloadCVByUrl(): void {
  //   //c:/users/.../cv.pdf
  //   this.cvservice.downloadCVByUrl(this.cvName, this.userId).subscribe(
  //     (data: any) => {
  //       console.log('DATA::::', data);
  //       //data = JSON.parse(data);
  //       //data = data.slice(1, -1);
  //       //window.location.href = data;
  //       this.url = data.url;
  //       //console.log('DATA///URL:', data);
  //       console.log('DATA///URL:', this.url);
  //       //window.location.href =
  //       //window.location.protocol + '//' + window.location.host + this.url;
  //       //document.location.href = 'http://' + this.url;
  //       this.url = 'C:' + this.url.slice(2);
  //       console.log('URL///URL:', `http://${this.url}`);
  //       //window.open(`http://${this.url}`);
  //     },
  //     (err: any) => {
  //       console.log('ERR DE RET', err);
  //     }
  //   );
  //   // window.location.href ='C:\\Users\\Asus\\Downloads\\ProjectStagi\\Stage\\stagi.tn\\src\\assets\\img\\pdp\\GLSI-3-C.pdf';
  // }
  // download blob file
  // downloadCV(): void {
  //   this.cvservice.downloadCV(this.cvName).subscribe(
  //     (data: any) => {
  //       console.log('CV', data);
  //     },
  //     (err: any) => {
  //       console.log(err);
  //     }
  //   );
  // }
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe({
      next: (p: ParamMap) => {
        this.userId = p.get('id');
        this.userService.getUser(p.get('id')).subscribe(
          (data: any) => {
            this.user = data;
            console.log('USER///', this.user);
            console.log('data///', data);
            this.user = data;
            console.log('data', data);
            this.ImageUrl = this.user.image;
            this.Imagename = this.ImageUrl.split('\\');
            //console.log(this.Imagename);
            this.ImageUrl =
              // '\\assets\\img\\pdp\\' + this.Imagename[this.Imagename.length - 1];
              'assets/img/pdp/' + this.Imagename[this.Imagename.length - 1];
            console.log('imageURL:', this.ImageUrl);
            // CV
            this.cvURL = this.user.cv;
            this.cvName = this.cvURL.split('\\');

            console.log(this.cvName);
            this.cvName = this.cvName[this.cvName.length - 1];
            this.cvName = JSON.stringify(this.cvName);
            this.cvName = this.cvName.slice(1, -1);
            this.cvURL =
              // '\\assets\\img\\pdp\\' + this.Imagename[this.Imagename.length - 1];
              'assets/img/pdp/' + this.cvName;
            console.log('cvURL:', this.cvURL);
            console.log('cvName:', this.cvName);
            this.testURL = 'assets/img/pdp/' + this.cvName;
            this.iframeData = `${this.testURL}`;
            console.log('iframeData:', this.iframeData);
          },
          (err: any) => {
            console.log(err);
          }
        );
      },
    });

    //this.router.navigateByUrl('/');
  }
  backToHome(): void {
    this.router.navigateByUrl('/');
  }
}
