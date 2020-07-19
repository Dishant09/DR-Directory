package com.javasampleapproach.springrest.mysql.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.EnableTransactionManagement;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.javasampleapproach.springrest.mysql.model.Employee;
import com.javasampleapproach.springrest.mysql.repo.EmployeeRepository;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@Transactional
@EnableTransactionManagement
@RequestMapping("/api")
public class EmployeeController {
 
  @Autowired
  EmployeeRepository repository;
 
  @GetMapping("/employees")
  public List<Employee> getAllEmployees() {
    System.out.println("Get all Employees...");
 
    List<Employee> employees = new ArrayList<>();
    repository.findAll().forEach(employees::add);
    return employees;
  }
 
  @PostMapping(value = "/employees/add")
  public Employee postEmployee(@RequestBody Employee employee) {
	  
	  System.out.println(employee.getEmployeename());
	  System.out.println(employee.getAge());
	  System.out.println(employee.getEmailid());
	  System.out.println(employee.getPassword());
	  System.out.println(employee.getContactnumber());
	  System.out.println(employee.getUnit());
	  System.out.println(employee.getAddress());
	  System.out.println(employee.getDesignation());
	  System.out.println(employee.getCurrentcity());
	  System.out.println(employee.getExperience());
	  Employee _employee=null;
	  _employee=repository.save(new Employee(employee.getEmployeename(),employee.getAge(),employee.getEmailid(),employee.getPassword(),employee.getAddress(),employee.getContactnumber(),employee.getUnit(),employee.getDesignation(),employee.getCurrentcity(),employee.getExperience()));
      
	  return _employee;
  
  }
  
  @PutMapping("/employees/{employeeno}")
  public ResponseEntity<Employee> updateEmployee(@PathVariable("employeeno") String employeeno, @RequestBody Employee employee) {
	
    Optional<Employee> employeeData = repository.findByemployeeno(Long.parseLong(employeeno));
 
    if (employeeData.isPresent()) {
    	
    	Employee _employee = employeeData.get();
    	
    	_employee.setEmployeename(employee.getEmployeename());
    	_employee.setAge(employee.getAge());
    	_employee.setEmailid(employee.getEmailid());
    	_employee.setPassword(employee.getPassword());
    	_employee.setAddress(employee.getAddress());
    	_employee.setContactnumber(employee.getContactnumber());
    	_employee.setUnit(employee.getUnit());
    	_employee.setDesignation(employee.getDesignation());
    	_employee.setCurrentcity(employee.getCurrentcity());
    	_employee.setExperience(employee.getExperience());
    	
      return new ResponseEntity<>(repository.save(_employee), HttpStatus.OK);
    } 
    else {
      return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
  }
 
  @DeleteMapping("/employees/delete/{employeeno}")
  public ResponseEntity<String> deleteEmployee(@PathVariable("employeeno") long employeeno) {
    System.out.println("Delete Employee with ID = " + employeeno + "...");
 
    repository.deleteById(employeeno);
 
    return new ResponseEntity<>("Employee has been deleted!", HttpStatus.OK);
  }
  
  @GetMapping(value = "/employees/employee/{employeeno}")
  public Employee findByEmployeeno(@PathVariable String employeeno) {
	System.out.println("Get Employees by employeeno...");
	Employee employees = repository.findById(Long.parseLong(employeeno)).get();
    return employees;
  }
  
  @GetMapping(value = "/employees/validateEmployee/{employeeno}/{password}")
  public boolean validateEmployee(@PathVariable String employeeno, @PathVariable String password) {
	
	Optional<Employee> employees = repository.findByemployeeno(Long.parseLong(employeeno));

	if(employees.get().getPassword().equals(password)){
		return true;
	}
	else
	{
		return false;
	}
  } 
}