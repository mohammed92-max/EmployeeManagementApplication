package com.boot.main.interfaces;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.boot.main.model.Employee;

public interface EmployeeInterface extends JpaRepository<Employee, Integer>
{
	List<Employee> findAll();

	public Iterable<Employee> deleteByFirstname(String firstname);
}
