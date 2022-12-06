import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {
  CurrentUser: any;
  ImageUrl: any;
  Imagename: any;
  ListUser: any;

  constructor(private userservice: UserService) { }

  ngOnInit(): void {
    this.getAll()

  }

  getAll(): void {
    this.userservice.allUsers().subscribe(
      data => {
        console.log(data)
        this.ListUser = data;

        for (let user of this.ListUser) {
          user.ImageUrl = user.image;
          user.Imagename = user.ImageUrl.split('\\');
          //console.log(this.Imagename);
          user.ImageUrl =
            // '\\assets\\img\\pdp\\' + this.Imagename[this.Imagename.length - 1];
            'assets/img/pdp/' + user.Imagename[user.Imagename.length - 1];
        }
        console.log(this.ListUser)
      },
      error => {

      }
    );
  }

}
