import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../models/user-model';

@Component({
  selector: 'app-show-users',
  templateUrl: './show-users.component.html',
  styleUrls: ['./show-users.component.css']
})
export class ShowUsersComponent implements OnInit {
  users:Array<any>
  constructor(private userService:UserService) { }

  ngOnInit() {
    this.getAllUsers()
  }
  getAllUsers(){
    this.userService.getAllUser().subscribe((res)=>{this.users=res
    })
  }

}
