import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { EntrepriseService } from 'src/app/entreprise/entreprise.service';
import { UserService } from 'src/app/user/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  Account: any;
  User: any;
  CurrentUser: any;
  ImageUrl: any;
  Imagename: any;
  cv:any

  constructor(
    private userservice: UserService,
    public sanitizer: DomSanitizer,
    private router: Router,
    private entrepriseservice: EntrepriseService
  ) { }

  ngOnInit(): void {
    this.Accountchange();
    console.log(this.Account);
    this.User = window.localStorage.getItem('USER');
    if (this.Account == 'STUDENT') {
      this.getUser();

    } else {
      this.getEntreprise();
    }

  }
  logout() {
    
    window.localStorage.clear();
    
    this.router.navigate(['/'])
    window.location.reload();


  }
  Accountchange() {
    console.log(window.localStorage.getItem('ACCOUNT'));
    if (window.localStorage.getItem('ACCOUNT') == 'Student') {
      this.Account = 'STUDENT';
    }
    if (window.localStorage.getItem('ACCOUNT') == 'Entreprise') {
      this.Account = 'ENTREPRISE';
    }

    if (window.localStorage.getItem('ACCOUNT') == null) {
      this.Account = 'VISITOR';
    }
  }
  getUser() {
    this.userservice.getUserByEmail(this.User).subscribe({
      next: (data) => {
        this.CurrentUser = data;
        window.localStorage.setItem('id',this.CurrentUser.id)
        console.log('data', data);
        this.ImageUrl = this.CurrentUser.image;
        this.Imagename = this.ImageUrl.split('\\');
        //console.log(this.Imagename);
        this.ImageUrl =
          // '\\assets\\img\\pdp\\' + this.Imagename[this.Imagename.length - 1];
          'assets/img/pdp/' + this.Imagename[this.Imagename.length - 1];
        console.log('imageURL:', this.ImageUrl);

        this.cv = this.CurrentUser.cv;
        this.cv = this.cv.split('\\');
        //console.log(this.Imagename);
        this.cv =
          // '\\assets\\img\\pdp\\' + this.Imagename[this.Imagename.length - 1];
          'assets/img/pdp/' + this.cv[this.cv.length - 1];
        console.log('CV//:', this.cv);
        window.localStorage.setItem('cv',this.cv)
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  getEntreprise() {
    this.entrepriseservice.getUserByEmail(this.User).subscribe({
      next: (data) => {
        this.CurrentUser = data;
        window.localStorage.setItem('id',this.CurrentUser.id)
        console.log('data', data);
        this.ImageUrl = this.CurrentUser.logo;
        this.Imagename = this.ImageUrl.split('\\');
        //console.log(this.Imagename);
        this.ImageUrl =
          // '\\assets\\img\\pdp\\' + this.Imagename[this.Imagename.length - 1];
          'assets/img/pdp/' + this.Imagename[this.Imagename.length - 1];
        console.log('imageURL:', this.ImageUrl);
        window.localStorage.setItem('ImageUrl', this.ImageUrl)
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
