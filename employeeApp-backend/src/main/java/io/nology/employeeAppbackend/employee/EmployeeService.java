package io.nology.employeeAppbackend.employee;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;


@Service
@Transactional
public class EmployeeService {
    
    // Dependency injection
    // Spring framework will aithomatically create an instance of the needed class and willl manage the lifecycle of it

    @Autowired
    private EmployeeRepository repository;

    // Create employee method

    public Employee create(EmployeeDTO data) {

        Employee newEmployee = new Employee();
        newEmployee.setFirstName(data.getFirstName());
        newEmployee.setMiddleName(data.getMiddleName());
        newEmployee.setLastName(data.getLastName());
        newEmployee.setEmailId(data.getEmailId());
        newEmployee.setMobileNum(data.getMobileNum());
        newEmployee.setAddress(data.getAddress());
        newEmployee.setContractType(data.getContractType());
        newEmployee.setStartDate(data.getStartDate());
        newEmployee.setFinishedDate(data.getFinishedDate());
        newEmployee.setWorkType(data.getWorkType());
        newEmployee.setWorkHours(data.getWorkHours());
        
        return this.repository.save(newEmployee);
    }

    // Get methods

    public List<Employee> getAll() {
        return this.repository.findAll();
    }

    public Optional<Employee> getById(Long id) {
        return this.repository.findById(id);
    }


    // Delete methods

    public boolean delete (Long id) {
        Optional<Employee> employeeId = this.getById(id);
        if (employeeId.isEmpty()) {
            return false;
        }

        this.repository.delete(employeeId.get());
        return true;
    }

    // Update methods

    public Employee update(Long id, EmployeeUpdateDTO data, Employee employee) {
        if(data.firstName != null) {
            employee.setFirstName(data.firstName.trim());
        }

        if(data.middleName != null) {
            employee.setMiddleName(data.middleName.trim());
        }

        if(data.lastName != null) {
            employee.setLastName(data.lastName.trim());
        }

        if(data.emailId != null) {
            employee.setEmailId(data.emailId);
        }

        if(data.mobileNum != null) {
            employee.setMobileNum(data.mobileNum);
        }

        if(data.address != null) {
            employee.setAddress(data.address);
        }

        if(data.contractType != null) {
            employee.setContractType(data.contractType);
        }

        if(data.startDate != null) {
            employee.setStartDate(data.startDate);
        }

        if(data.finishedDate != null) {
            employee.setFinishedDate(data.finishedDate);
        }

        if(data.workType != null) {
            employee.setWorkType(data.workType);
        }

        if(data.workHours != null) {
            employee.setWorkHours(data.workHours);
        }

        return this.repository.save(employee);
    }

   
}
