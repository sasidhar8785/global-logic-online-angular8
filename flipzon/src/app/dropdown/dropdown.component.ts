import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {
  items: Array<any>;
  selectedItem:any;
  constructor() {
    this.items = [{ name: "Settings", id: 1 },
    { name: "Profile", id: 2 },
    { name: "Logout", id: 3 }];

    this.selectedItem={name:"Please Select",id:0};
  }
  selectItem(i){
    this.selectedItem=i;
  }
  ngOnInit(): void {
  }

}
