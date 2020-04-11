import { Component, OnInit } from '@angular/core';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users:Array<any>;
  constructor(private commonSvc:CommonService) { 
    this.users =this.commonSvc.userList();
  }
  selectUser(i){
    this.commonSvc.selectUser(i);
  }
  ngOnInit(): void {
  }
}
