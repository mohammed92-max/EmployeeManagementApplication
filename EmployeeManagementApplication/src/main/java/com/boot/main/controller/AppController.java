package com.boot.main.controller;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.boot.main.model.Employee;
import com.boot.main.model.Manager;

import com.boot.main.service.AppService;

@org.springframework.web.bind.annotation.RestController
public class AppController 
{
	@Autowired
	private AppService appservice;
	
	/* Signup of manager */
	
	@PostMapping("/createManager")
	@Transactional
	@CrossOrigin
	public String createManager(@RequestBody Manager manager)
	{
		appservice.createManagerService(manager);
		return "Hi " +manager.getFirstname()+ " your signup is successful";	
	}
	
	/* Creation of employee records */
	
	@PostMapping("/createEmployee")
	@Transactional
	@CrossOrigin
	public String createEmployee(@RequestBody Employee employee)
	{
		System.out.println("Cursor in AppController.java");
		appservice.createEmployeeService(employee);
		return "Hi " +employee.getFirstname()+ " your signup is successful";	
	}
	
	/* Display of employee records by firstname and lastname */
	
	@GetMapping("/readAll")
	@CrossOrigin
	public Iterable<Employee> findAll()
	{		
		return appservice.findAllService();
	}
	
	/* Delete employee record */
	
	@GetMapping("/delete/{firstname}")
	@Transactional
	@CrossOrigin
	public Iterable<Employee> deleteEmployee(@PathVariable String firstname)
	{
		return appservice.deleteEmployeeService(firstname);
	}
	
	/* Update employee record */
	
	@PutMapping("/updateEmployee")
	@Transactional
	@CrossOrigin
	public String updateEmployee(@RequestBody Employee employee)
	{
		appservice.updateEmployeeService(employee);
		return employee.getFirstname()+ " record updated successfully";	
	}	
}



