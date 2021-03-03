package com.boot.main.model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="manager")
public class Manager 
{
	@Id
	private int managerid;
	private String email;
	private String firstname;
	private String lastname;
	private String password;
	private String address;
	private String dob;
	private String company;
	
	public Manager() 
	{
		super();
	}

	public Manager(int managerid, String email, String firstname, String lastname, String password, String address,
			String dob, String company) 
	{
		super();
		this.managerid = managerid;
		this.email = email;
		this.firstname = firstname;
		this.lastname = lastname;
		this.password = password;
		this.address = address;
		this.dob = dob;
		this.company = company;
	}

	public int getManagerid() {
		return managerid;
	}

	public void setManagerid(int managerid) {
		this.managerid = managerid;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
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

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
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

	public String getCompany() {
		return company;
	}

	public void setCompany(String company) {
		this.company = company;
	}

	@Override
	public String toString() 
	{
		return "Manager [managerid=" + managerid + ", email=" + email + ", firstname=" + firstname + ", lastname="
				+ lastname + ", password=" + password + ", address=" + address + ", dob=" + dob + ", company=" + company
				+ "]";
	}
	
}
