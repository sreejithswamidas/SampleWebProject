import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserService } from './user.service';
import { MatDialog } from '@angular/material';
import { LoginComponent } from './login/login.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test-app';
  constructor(private http:HttpClient,private userService:UserService,private dialog:MatDialog){}
  ngOnInit(){
    
  }
  onClick(){
    let obs=this.userService.getAllUser()
    obs.subscribe((response)=>console.log(response))
  }
  loginPop(){
    let dialogRef=this.dialog.open(LoginComponent)
    
  }
}
