import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  name:string;
  age:number;
  email:string;
  address:{
    street:string,
    city:string,
    state:string
  }
  hobbies:string[];

  constructor() { }

  ngOnInit() {
    this.name = 'John Doe';
    this.age = 30;
    this.email = 'email';
    this.address = {
      street:'50 Main St',
      city:'Orlando',
      state:'FL'
    }
    this.hobbies = ['write code', 'watch movies', 'listen to music']
  }

  onClick() {
    this.name='Dennis Michael';
    this.hobbies.push('new hobby');
  }

  addHobby(hobby) {
    alert(hobby);
    this.hobbies.unshift(hobby);
    return false;
  }

}
