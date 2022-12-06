import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  helper = new JwtHelperService();
  decodedToken: any;

  constructor(private loginservice: LoginService, private router: Router) {}

  ngOnInit(): void {}

  login(form: any) {
    console.log(form);
    this.loginservice.login(form).subscribe(
      (data) => {
        console.log(data);
        window.localStorage.removeItem('token');
        window.localStorage.setItem('token', data['jwt']);

        this.decodedToken = this.helper.decodeToken(data['jwt']);
        window.localStorage.removeItem('USER');
        window.localStorage.setItem('USER', this.decodedToken['sub']);
        window.localStorage.removeItem('ACCOUNT');
        window.localStorage.setItem(
          'ACCOUNT',
          this.decodedToken['accountType']
        );
          this.router.navigate(['/'])
        window.location.reload();
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
