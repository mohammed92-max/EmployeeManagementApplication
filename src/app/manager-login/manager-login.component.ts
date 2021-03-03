import { invalid } from '@angular/compiler/src/render3/view/util';
import { Component, OnInit } from '@angular/core'; 
import { Router } from '@angular/router';
import { AuthenticationService } from '../service/authentication.service';

@Component({
  selector: 'app-manager-login',
  templateUrl: './manager-login.component.html',
  styleUrls: ['./manager-login.component.scss']
})
export class ManagerLoginComponent implements OnInit    
{ 
  email = '' 
  password = ''
  invalidLogin = false

  constructor(private router: Router,private loginservice: AuthenticationService) { }

  ngOnInit() 
  {}

  login() 
  {
    if (this.loginservice.authenticate(this.email, this.password)) 
    {
      this.router.navigate(['homescreen'])
      this.invalidLogin = false
    } 
    else
    { 
      this.invalidLogin = true
    }  
  }

}

