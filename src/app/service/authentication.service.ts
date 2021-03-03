import { Injectable } from '@angular/core';
import { ManagerLogoutComponent } from '../manager-logout/manager-logout.component'; 

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService 
{ 
  constructor() { }

  authenticate(email, password) 
  {
    if (email === "shahrukh@gmail.com" && password === "123") 
    {
      sessionStorage.setItem('email', email)
      return true;
    } 
    else 
    {
      document.write("Invalid email or password")
      return false;
    }
  }

  isUserLoggedIn() 
  {
    let user = sessionStorage.getItem('email')
    console.log(!(user === null))
    return !(user === null)
  }

  logOut() 
  {
    sessionStorage.removeItem('email')
  }
}




















