import { Component, OnInit } from '@angular/core'; 
import { appServiceService } from "../app-service.service";        
  
import { Employee } from "../employee";              
import { UrlResolver } from "node_modules/url"; 
import { importType } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss']
})
export class AddEmployeeComponent implements OnInit 
{

  employee : Employee = new Employee(0,"","","","","","");
  message : any

  constructor(private service : appServiceService)   
  { }

  ngOnInit(): void 
  {

  }

  public onSubmit()
  {
    //document.write("Cursor in add-employee.comp.ts")
    let response = this.service.createEmployee(this.employee)  

    response.subscribe(data => this.message = data)
  }

  //onSubmit() {
  //  this.apiService.createUser(this.addForm.value)
  //    .subscribe( data => {
  //      this.router.navigate(['list-user']);
  //    });
  //}
}
