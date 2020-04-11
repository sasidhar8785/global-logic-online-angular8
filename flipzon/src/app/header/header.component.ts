import { Component, OnInit } from '@angular/core';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  /*define class properties*/
  companyName:String;
  usersList: any[];
  constructor(private commonSvc:CommonService) { 
    //Assign Data
    this.companyName='Global Logic';
    this.usersList =commonSvc.selectedList?commonSvc.selectedList:[];
  }

  ngOnInit(): void {
  }

}
