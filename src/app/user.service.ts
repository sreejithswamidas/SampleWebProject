import { Injectable } from '@angular/core';
import { HttpClient,HttpParams } from '@angular/common/http';
import { User } from './models/user-model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user :User
  constructor(private http:HttpClient) {
    this.user=new User(0,"","","")
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
  getOneUser(UserID:string){
    let param= new HttpParams().set('UserID',UserID)
    return this.http.get("http://localhost:8080/user/getOne",{params:param})
  }
}
