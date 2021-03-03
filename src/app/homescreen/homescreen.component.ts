import { Component, OnInit } from '@angular/core'; 
import { appServiceService } from "../app-service.service";             
import { Employee } from "../employee";  
import { ManagerSignupComponent } from "../manager-signup/manager-signup.component";  

@Component({
  selector: 'app-homescreen',
  templateUrl: './homescreen.component.html' 
  //styleUrls: ['./homescreen.component.scss']
})
export class HomescreenComponent implements OnInit   
{
  messaging : any

  constructor( private service: appServiceService) 
  { }

  ngOnInit(): void 
  {
    let response = this.service.findAll() 

    response.subscribe(data => this.messaging = data)
  }

  public deleteEmployee(firstname: string) 
  {
    document.write("In homescreen.comp.ts file")
    let response = this.service.deleteEmployee(firstname)

    response.subscribe(data => this.messaging = data)
  }
}





