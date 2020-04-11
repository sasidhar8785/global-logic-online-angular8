import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  /*define class properties*/
  companyName:String;
  constructor() { 
    //Assign Data
    this.companyName='Global Logic';

  }

  ngOnInit(): void {
  }

}
