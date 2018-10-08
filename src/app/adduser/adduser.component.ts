import { Component, OnInit, Inject, TemplateRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../user.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Template } from '@angular/compiler/src/render3/r3_ast';
import { UserCreatedAlertComponent } from '../user-created-alert/user-created-alert.component';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {

  UserName:string
  Email:string
  Password:string
  ConfirmPassword:string
  
  constructor(public http:HttpClient,private userService:UserService) {

   }

  ngOnInit() {
  }
  addUser() {
    if(this.Password==this.ConfirmPassword){
    let obs=this.userService.addUser(this.UserName,this.Email,this.Password)
    if(obs._isScalar){window.alert("Some Error occured, Please try after some time")}
    obs.subscribe((Response)=>{window.alert("new User Created")})
    }
    
  }    

  }
 