import { NgModule } from '@angular/core'; 
import { Routes, RouterModule } from '@angular/router';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { HomescreenComponent } from './homescreen/homescreen.component';
import { ManagerLoginComponent } from './manager-login/manager-login.component'; 
import { ManagerSignupComponent } from './manager-signup/manager-signup.component';
import { AuthGuardService } from "./service/auth-guard.service";
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';

const routes: Routes = [
  {
    path: "homescreen" , component: HomescreenComponent,canActivate:[AuthGuardService]
  },
  { 
    path: 'manager-login', component: ManagerLoginComponent 
  },
  {
    path: "manager-signup" , component: ManagerSignupComponent //,canActivate:[AuthGuardService]
  },
  {
    path: "add-employee" , component : AddEmployeeComponent
  },
  {
    path: "update-employee" , component : UpdateEmployeeComponent
  },
  {
    path: "**" , component: ManagerLoginComponent,canActivate:[AuthGuardService]
  },
  { 
    path: '', component: ManagerLoginComponent, canActivate:[AuthGuardService] 
  },
  {
    path: " ", redirectTo: "manager-login" , pathMatch: "full", canActivate:[AuthGuardService]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }




