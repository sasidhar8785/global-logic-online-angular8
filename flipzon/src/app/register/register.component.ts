import { Component, OnInit } from '@angular/core';
import { Register } from './register.model';
import { HttpService } from '../services/http.service';
import { APP_URL } from '../constants';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  register: Register;
  constructor(private httpSvc: HttpService) {
    this.register = new Register();
    this.register.email = 'John@k.com';
    this.register.yearOfBirth = '2019';
    this.register.country = 'IN';

  }

  ngOnInit(): void {
    this.getCountries();
    this.getYears();
  }
  registerUser() {
    console.log(this.register);
    console.log(this.countries);
  }
  countries = [];
  getCountries() {
    this.httpSvc.commonGet(APP_URL.GET_COUNTRIES).toPromise().then((result: any) => {

      this.countries = result.map((x: any) => { return { name: x.name, id: x.alpha2Code } });
      console.log(this.countries);
    }).catch(err => {
      console.log(err);
    })
  }
  yearList = [];
  getYears() {
    let currentYear = new Date().getFullYear();
    console.log(currentYear);
    for (let i = currentYear - 20; i < currentYear; i++) {
      this.yearList.push({ name: i, id: i });
    }
  }
  selectedCountry(item) {
    this.register.country = item;
  }
  selectedYear(item) {
    this.register.yearOfBirth = item;
  }
}
