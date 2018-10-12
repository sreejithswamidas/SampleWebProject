import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserService } from './user.service';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { LoginComponent } from './login/login.component';
import { WarningComponent } from './warning/warning.component';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test-app';
  loggedIn:boolean
  notloggedIn:boolean
  
  constructor(private userService:UserService,private dialog:MatDialog){
  }
  ngOnInit(){
    
  }
  onClick(){
    let obs=this.userService.getAllUser()
    obs.subscribe((response)=>console.log(response))
  }
  loginPop(){
    this.dialog.open(LoginComponent)
  }
}
