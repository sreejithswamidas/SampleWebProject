import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../models/user-model';
import { RouterModule, ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  UserID:any
  Password:string
  user:any

  constructor(private userService: UserService,private router:Router) { }

  ngOnInit() {
  }
  login(){
    this.userService.getOneUser(this.UserID).subscribe((res)=>{
      console.log(res)
      if(res.password==this.Password)
      this.router.navigate(['/showUser'])
    })
  }

}
