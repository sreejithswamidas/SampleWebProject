import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../models/user-model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-show-user',
  templateUrl: './show-user.component.html',
  styleUrls: ['./show-user.component.css']
})
export class ShowUserComponent implements OnInit {
  UserID:any
  user:User

  constructor(private route:ActivatedRoute,private service:UserService) { }

  ngOnInit() {
    this.get()
  }
  get(){
    this.route.params.subscribe((res)=>{this.UserID=res["UserID"]})
    this.service.getOneUser(this.UserID).subscribe((res)=>{
      this.user=res
    })
  }
}
