package com.boot.main.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.boot.main.interfaces.EmployeeInterface;
import com.boot.main.interfaces.ManagerInterface;
import com.boot.main.model.Employee;
import com.boot.main.model.Manager;

@Service
public class AppService 
{
	@Autowired
	private ManagerInterface managerinterface;
	
	@Autowired
	private EmployeeInterface employeeinterface;
	
	public AppService() 
	{
		super();
		
	}
	
	public AppService(ManagerInterface managerinterface, EmployeeInterface employeeinterface) 
	{
		super();
		this.managerinterface = managerinterface;
		this.employeeinterface = employeeinterface;
	}

	
	
	public String createManagerService(Manager manager)
	{
		return managerinterface.save(manager).toString(); 
	}
	
	public String createEmployeeService(Employee employee)
	{
		System.out.println("Cursor in AppService.java");
		return employeeinterface.save(employee).toString(); 
	}
	
	public Iterable<Employee> findAllService()
	{
		return employeeinterface.findAll();
	}
	
	public Iterable<Employee> deleteEmployeeService(String firstname)
	{
		employeeinterface.deleteByFirstname(firstname);
		return employeeinterface.findAll();
	}
	
	public String updateEmployeeService(Employee employee)
	{
		return employeeinterface.save(employee).toString(); 
	}
}
