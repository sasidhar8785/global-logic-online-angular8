import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {
  @Input()
  items=[]

  selectedItem:any;
  constructor() {
    this.selectedItem={name:"Please Select",id:0};
  }
  selectItem(i){
    this.selectedItem=i;
  }
  ngOnInit(): void {
  }
  

}
