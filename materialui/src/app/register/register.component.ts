import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  firstName: FormControl;
  email: FormControl;
  gender = '';
  selected = "";
  genders = ['Male', 'Female', 'Others'];
  countries = [{ name: "India", id: "IN" }, { name: "United States", id: "USA" }]
  constructor() {
    this.firstName = new FormControl('Kiran', [Validators.required]);
    this.email = new FormControl('', [Validators.required, Validators.email]);
    const currentYear = new Date().getFullYear();
    this.minDate = new Date(currentYear - 20, 0, 1);
    this.maxDate = new Date(currentYear + 1, 11, 31);
  }

  ngOnInit(): void {
  }
  product =new FormControl('',[]);
  products = [{
    name: "Apparel",
    brand: [{ value: "Nike", id: "NK" }, { value: "Reebok", id: "RBK" }]
  }, {
    name: "Electronics",
    brand: [{ value: "iPhone", id: "IP" }, { value: "Samsung Note10", id: "SMT10" }]
  }]
  minDate: Date;
  maxDate: Date;
}
