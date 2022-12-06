import { Component, OnInit } from '@angular/core';
import { UserService } from '../user/services/user.service';
import { COMMA, ENTER } from '@angular/cdk/keycodes';

import { MatChipInputEvent } from '@angular/material/chips';
export interface Fruit {
  name: string;
}
@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {
  resume: any;
  cv: any

  constructor(private userservice: UserService) { }

  ngOnInit(): void {

    this.cv = window.localStorage.getItem('cv')
  }


  getdetailsResume(path: string) {
    console.log("heeeeeey")
    return this.userservice.getDetailresume(path).subscribe({
      next: (data) => {
        console.log("heey")
        console.log(data)
        this.resume = JSON.parse(data)
      }
      ,
      error: (err) => console.log(err)
    })
  }
  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  fruits: Fruit[] = [{ name: 'Lemon' }, { name: 'Lime' }, { name: 'Apple' }];

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our fruit
    if (value) {
      this.fruits.push({ name: value });
    }

    // Clear the input value
    event.chipInput!.clear();
  }

  remove(fruit: Fruit): void {
    const index = this.fruits.indexOf(fruit);

    if (index >= 0) {
      this.fruits.splice(index, 1);
    }
  }

  edit(fruit: Fruit, event: MatChipInputEvent) {
    const value = event.value.trim();

    // Remove fruit if it no longer has a name
    if (!value) {
      this.remove(fruit);
      return;
    }

    // Edit existing fruit
    const index = this.fruits.indexOf(fruit);
    if (index > 0) {
      this.fruits[index].name = value;
    }
  }
}
