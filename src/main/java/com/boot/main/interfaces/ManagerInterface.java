package com.boot.main.interfaces;

import org.springframework.data.jpa.repository.JpaRepository;

import com.boot.main.model.Manager;

public interface ManagerInterface extends JpaRepository<Manager, Integer>
{

}
