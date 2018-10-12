import { Component, OnInit, Injectable } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../models/user-model';
import { RouterModule, ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { MatDialogRef, MatDialog, MatDialogConfig } from '@angular/material';
import { WarningComponent } from '../warning/warning.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  UserID:any
  Password:string
  loginForm:FormGroup
  logedIn:boolean=true


  constructor(private userService: UserService,private dialog:MatDialog,private router:Router,
    public dialogRef:MatDialogRef<LoginComponent>,
    public form:FormBuilder) { }
  
  ngOnInit() {
    this.loginForm = this.form.group({
      userID: ['',Validators.required],
      password: ['',Validators.required],
    });
  }
  login(){
    this.userService.getOneUser(this.UserID).subscribe((res)=>{
        if(res['password']==this.Password)
        {this.userService.logedIn=true
          this.logedIn=true
        }
        else{
        this.userService.logedIn=false
        this.logedIn=false
        }
    })
    if(this.logedIn){
      this.dialogRef.close()
      this.router.navigate(['/showUser',this.UserID])

    }
  }
}