import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "node_modules/@angular/forms"
import { HttpClientModule } from "node_modules/@angular/common/http"

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ManagerSignupComponent } from './manager-signup/manager-signup.component';
import { ManagerLoginComponent } from './manager-login/manager-login.component';
import { HomescreenComponent } from './homescreen/homescreen.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { ManagerLogoutComponent } from './manager-logout/manager-logout.component';

@NgModule({
  declarations: [
    AppComponent,
    ManagerSignupComponent,
    ManagerLoginComponent,
    HomescreenComponent,
    AddEmployeeComponent,
    UpdateEmployeeComponent,
    ManagerLogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
