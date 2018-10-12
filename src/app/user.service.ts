import { Injectable } from '@angular/core';
import { HttpClient,HttpParams } from '@angular/common/http';
import { User } from './models/user-model';
import { Observable } from 'rxjs';
import { fbind } from 'q';
import { post } from 'selenium-webdriver/http';
import { puts } from 'util';
import { ConditionalExpr } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user :User
  loginResponse:any;
  logedIn:boolean
  constructor(private http:HttpClient) {
    this.user=new User(0,"","","")
    this.logedIn=false
   }
  addUser(username:string,email:string,password:string):Observable<any> {
    this.user.name=username
    this.user.email=email
    this.user.password=password
    return this.http.post("http://localhost:8080/user/add",this.user)
  }
  getAllUser():Observable<any>{
    return this.http.get("http://localhost:8080/user/all")
  }
  getOneUser(UserID:string):Observable<any>{
    let param= new HttpParams().set('UserID',UserID)
    return this.http.get("http://localhost:8080/user/show",{params:param})
  }

  
}


