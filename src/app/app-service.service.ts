import { Injectable } from '@angular/core';     
import { HttpClient, HttpClientModule } from "@angular/common/http"
import { UrlResolver } from "node_modules/url";
import { FormsModule } from "@angular/forms"; 
import { Employee } from './employee';
import { Observable } from 'rxjs';

@Injectable({ 
  providedIn: 'root'
})
export class appServiceService  
{
  constructor(private http: HttpClient)  
  { }

  //getEmpid(empid: number)
  //{
  //  return this.http.get("http://localhost:8080/Employee"+ empid);
  //}



  /* manager-signup component */
  public createManager(manage) 
  {
    return this.http.post("http://localhost:8080/createManager",manage ,{responseType:"text" as "json"})
  }

  /* add-employee component */
  public createEmployee(employee) 
  {
    //document.write("\nCursor in app-service.ts")
    return this.http.post("http://localhost:8080/createEmployee", employee) 
  }

  /* update-employee component */
  public updateEmployee(employee) 
  {
    return this.http.put("http://localhost:8080/updateEmployee", employee) 
  }

  /* delete-employee component */
  public deleteEmployee(firstname)
  {
    document.write("In app-service.service.ts file")
    return this.http.get("http://localhost:8080/delete/" + firstname)
  }
  
  /* display all employees */
  public findAll()                                  
  {
    return this.http.get("http://localhost:8080/readAll")  
  }

}









