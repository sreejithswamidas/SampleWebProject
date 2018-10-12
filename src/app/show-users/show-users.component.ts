import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../models/user-model';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-show-users',
  templateUrl: './show-users.component.html',
  styleUrls: ['./show-users.component.css']
})
export class ShowUsersComponent implements OnInit {
  users:Array<any>
  constructor(private userService:UserService,private dialog:MatDialog) {
   }

  ngOnInit() {
    if(this.userService.logedIn)
    this.getAllUsers()
    else
    this.dialog.open(LoginComponent)
  }
  getAllUsers(){
    this.userService.getAllUser().subscribe((res)=>{this.users=res
    })
  }

}
