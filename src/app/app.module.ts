import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
import {FormsModule} from '@angular/forms'
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AdduserComponent } from './adduser/adduser.component';
import { ShowUsersComponent } from './show-users/show-users.component';
import { UserService } from './user.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCardModule, MatInputModule, MatListModule, MatToolbarModule, MatMenu, MatGridListModule } from '@angular/material';
import { UserCreatedAlertComponent } from './user-created-alert/user-created-alert.component';
import { LoginComponent } from './login/login.component';
import { ShowUserComponent } from './show-user/show-user.component'


@NgModule({
  declarations: [
    AppComponent,
    AdduserComponent,
    ShowUsersComponent,
    UserCreatedAlertComponent,
    LoginComponent,
    ShowUserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatListModule,
    MatToolbarModule,
    MatGridListModule
    
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
