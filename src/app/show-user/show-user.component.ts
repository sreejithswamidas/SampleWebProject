import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../models/user-model';
import { UserService } from '../user.service';
import { MatDialog } from '@angular/material';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-show-user',
  templateUrl: './show-user.component.html',
  styleUrls: ['./show-user.component.css']
})
export class ShowUserComponent implements OnInit {
  UserID:any
  user:User

  constructor(private route:ActivatedRoute,private service:UserService,private dialog:MatDialog) { }

  ngOnInit() {
    if(this.service.logedIn)
    this.get()
    else
    this.dialog.open(LoginComponent)
  }
  get(){
    this.route.params.subscribe((res)=>{this.UserID=res["UserID"]})
    this.service.getOneUser(this.UserID).subscribe((res)=>{
      this.user=res
    })
  }
}
