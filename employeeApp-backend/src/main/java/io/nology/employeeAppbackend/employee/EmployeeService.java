package io.nology.employeeAppbackend.employee;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;

public class EmployeeService {
    
    // dependency injection
    // spring framework will aithomatically create an instance of the needed class and willl manage the lifecycle of it

    @Autowired
    private EmployeeRepository repository;

    public Employee create(EmployeeDTO data) {
        Employee newEmployee = new Employee(data.getFirstName(), data.getLastName(), data.getEmailId());
        this.repository.save(newEmployee);
        return newEmployee;
    }

    public List<Employee> getAll() {
        return this.repository.findAll();
    }

    public Optional<Employee> getById(Long id) {
        return this.repository.findById(id);
    }
}
