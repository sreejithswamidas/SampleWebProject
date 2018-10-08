import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdduserComponent } from './adduser/adduser.component';
import { ShowUsersComponent } from './show-users/show-users.component';
import { LoginComponent } from './login/login.component';
import { ShowUserComponent } from './show-user/show-user.component';

const routes: Routes = [
  { path: 'addUser', component: AdduserComponent },
  {path : 'showUsers', component : ShowUsersComponent},
  {path : 'login', component: LoginComponent},
  {path:'showUser',component: ShowUserComponent}
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
 exports:[ RouterModule ]
})
export class AppRoutingModule { }

