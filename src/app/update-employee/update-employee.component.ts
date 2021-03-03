import { Component, OnInit, Inject } from '@angular/core';      
import { appServiceService } from '../app-service.service';      
import { Employee } from '../employee';
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {first} from "rxjs/operators";

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.scss']
})
export class UpdateEmployeeComponent implements OnInit 
{
  employee : Employee = new Employee(0,"","","","","","");
  message : any
  
  constructor(private service: appServiceService) { }


  ngOnInit(): void 
  {

  }

  public onSubmit()
  {
    let response = this.service.updateEmployee(this.employee)  

    response.subscribe(data => this.message = data)
  }

  
  

}




/*
import { Component, OnInit, Inject } from '@angular/core';      
import { appServiceService } from '../app-service.service';      
import { Employee } from '../employee';
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {first} from "rxjs/operators";

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.scss']
})
export class UpdateEmployeeComponent implements OnInit 
{
  //employee : Employee = new Employee(0,"","","","","","");
  message : any

  employee: Employee;
  editForm: FormGroup;
  
  constructor(private formBuilder: FormBuilder,private router: Router, private service: appServiceService) { }


  ngOnInit(): void 
  {
    
    
    let empid = window.localStorage.getItem("updateEmpid");
    if(!empid) {
      alert("Invalid action.")
      this.router.navigate(['homescreen']);
      return;
    }
    this.editForm = this.formBuilder.group({
      empid: [''],
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      address: ['', Validators.required],
      dob: ['', Validators.required],
      mobile: ['', Validators.required],
      city: ['', Validators.required]
    });
    this.service.getEmpid(+empid)
      .subscribe( data => {
       //this.editForm.setValue(data.result);
      });
     

  }

  public onSubmit()
  {
    let response = this.service.updateEmployee(this.employee)  

    response.subscribe(data => this.message = data)
  }

  
  
  public onSubmit() 
  {
    this.service.updateEmployee(this.editForm.value)
      .pipe(first())
      .subscribe(
        data => {
          if(true) {
            alert('Employee updated successfully.');
            this.router.navigate(['homescreen']);
          }else {
            //alert(data.message);
          }
        },
        error => {
          alert(error);
        });
  }
  

}


//data.status === 200
*/