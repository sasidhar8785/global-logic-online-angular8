import { Component } from '@angular/core';

@Component({
  selector: 'app-navitems',
  templateUrl: './navitems.component.html',
  styleUrls: ['./navitems.component.css']
})
export class NavitemsComponent  {
  navitems:Array<any>;
  constructor() { 
    this.navitems=[{name:"Electornics",id:1},
    {name:"Apprael",id:2},
    {name:"Home Appliances",id:3},
  ]
  }
}
