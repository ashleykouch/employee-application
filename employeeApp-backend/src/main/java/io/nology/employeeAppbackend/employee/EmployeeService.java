package io.nology.employeeAppbackend.employee;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
@Transactional
public class EmployeeService {
    
    // Dependency injection
    // Spring framework will aithomatically create an instance of the needed class and willl manage the lifecycle of it

    @Autowired
    private EmployeeRepository repository;

    // Create employee method

    public Employee create(EmployeeDTO data) {
        Employee newEmployee = new Employee(data.getFirstName(), data.getLastName(), data.getEmailId());
        this.repository.save(newEmployee);
        return newEmployee;
    }

    // Get methods

    public List<Employee> getAll() {
        return this.repository.findAll();
    }

    public Optional<Employee> getById(Long id) {
        return this.repository.findById(id);
    }

    // Update methods

    // public Optional<Employee> update(EmployeeDTO data) {
    //    repository.save(data);
        
    // }


    // Delete methods

    public boolean delete (Long id) {
        Optional<Employee> employeeId = this.getById(id);
        if (employeeId.isEmpty()) {
            return false;
        }

        this.repository.delete(employeeId.get());
        return true;
    }
}
