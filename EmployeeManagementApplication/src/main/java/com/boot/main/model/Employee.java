package com.boot.main.model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="employee")
public class Employee 
{
	@Id
	private int empid;
	private String firstname;
	private String lastname;
	private String address;
	private String dob;
	private String mobile;
	private String city;
	
	public Employee() 
	{
		super();
		
	}
	
	public Employee(int empid, String firstname, String lastname, String address, String dob, String mobile,
			String city) 
	{
		super();
		this.empid = empid;
		this.firstname = firstname;
		this.lastname = lastname;
		this.address = address;
		this.dob = dob;
		this.mobile = mobile;
		this.city = city;
	}
	
	public int getEmpid() {
		return empid;
	}
	public void setEmpid(int empid) {
		this.empid = empid;
	}
	public String getFirstname() {
		return firstname;
	}
	public void setFirstname(String firstname) {
		this.firstname = firstname;
	}
	public String getLastname() {
		return lastname;
	}
	public void setLastname(String lastname) {
		this.lastname = lastname;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public String getDob() {
		return dob;
	}
	public void setDob(String dob) {
		this.dob = dob;
	}
	public String getMobile() {
		return mobile;
	}
	public void setMobile(String mobile) {
		this.mobile = mobile;
	}
	public String getCity() {
		return city;
	}
	public void setCity(String city) {
		this.city = city;
	}
	
	@Override
	public String toString() 
	{
		return "Employee [empid=" + empid + ", firstname=" + firstname + ", lastname=" + lastname + ", address="
				+ address + ", dob=" + dob + ", mobile=" + mobile + ", city=" + city + "]";
	}	
	
}
