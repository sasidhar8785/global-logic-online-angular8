import { Component, OnInit } from '@angular/core';
import { Register } from './register.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  register: Register;
  constructor() {
    this.register = new Register();
    this.register.email='John@k.com';
  }

  ngOnInit(): void {
  }
  registerUser() {
    console.log(this.register);
  }
}
