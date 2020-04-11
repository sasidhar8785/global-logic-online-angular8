import { Component, OnInit,Input ,Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {
  @Input()
  items=[]
  @Input()
  classname:String='form-control';
  @Output()
  selected= new EventEmitter();

  @Input()
  selectedItem:any;



  constructor() {
    this.selectedItem='';
  }
  selectItem(){
    this.selected.emit(this.selectedItem);
  }
  ngOnInit(): void {
  }
  

}
