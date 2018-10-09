import { Component, OnInit, Injectable } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../models/user-model';
import { RouterModule, ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  UserID:any
  Password:string

  constructor(private userService: UserService,private router:Router,public dialogRef:MatDialogRef<LoginComponent>) { }

  ngOnInit() {
  }
  login(){
    this.userService.getOneUser(this.UserID).subscribe((res)=>{
      console.log(res)
      if(res.password==this.Password){
      this.dialogRef.close()
      this.router.navigate(['showUser',this.UserID])
      }
      else{
        window.alert("Wrong credentials")
      }
    })
  }

}
