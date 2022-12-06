import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user/services/user.service';



@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  userexist: boolean = false;
  myFile: any;
  fileInput: any;
  myCV: any;
  myCVINput: any;
  constructor(private userService:UserService) { }

  ngOnInit(): void {
  }

  addEntreprise(form: any): void {
    console.log(form)
    let image = new FormData();
    image.append('file', this.myFile);
   
    // Save image
   
    
            this.userService.addEntreprise(form).subscribe(
              (data) => {
                console.log(form);
              },
              (error) => {
                if (error.error == 'User Exist In DB ') {
                  this.userexist = true;
                }
              }
            );
         
  }
  

}
