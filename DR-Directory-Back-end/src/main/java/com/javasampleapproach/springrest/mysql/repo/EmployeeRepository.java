package com.javasampleapproach.springrest.mysql.repo;
import java.util.Optional;
import org.springframework.data.repository.CrudRepository;
import com.javasampleapproach.springrest.mysql.model.Employee;

public interface EmployeeRepository extends CrudRepository<Employee, Long> {
	Optional<Employee> findByemployeeno(long employeeno);
	Optional<Employee> findById(long employeeno);
	}