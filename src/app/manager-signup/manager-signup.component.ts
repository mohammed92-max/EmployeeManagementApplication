import { Component, OnInit } from '@angular/core';
import { appServiceService } from "../app-service.service"; 
import { Manager } from "../manager";                 
import { UrlResolver } from "node_modules/url";    

@Component({
  selector: 'app-manager-signup',
  templateUrl: './manager-signup.component.html',
  styleUrls: ['./manager-signup.component.scss']
})
export class ManagerSignupComponent implements OnInit 
{
  manage : Manager = new Manager(0,"","","","","",0,"");
  message : any

  constructor(private service : appServiceService)   
  { }

  ngOnInit(): void {
  }

  public signup() 
  {
    let response = this.service.createManager(this.manage)  

    response.subscribe(data => this.message = data) 
  }
}
