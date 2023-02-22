package io.nology.employeeAppbackend.employee;

// Java util imports
import java.util.List;
import java.util.Optional;

// Java transaction imports
import javax.transaction.Transactional;

// Java framework imports
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
        
            employee.setFirstName(data.firstName.trim());

            if(data.middleName != null) {
                employee.setMiddleName(data.middleName.trim());
            }
            
            employee.setLastName(data.lastName.trim());
            employee.setEmailId(data.emailId);
            employee.setMobileNum(data.mobileNum);
            employee.setAddress(data.address);
            employee.setContractType(data.contractType);
            employee.setStartDate(data.startDate);
            employee.setFinishedDate(data.finishedDate);
            employee.setWorkType(data.workType);
            employee.setWorkHours(data.workHours);

        return this.repository.save(employee);
    }
}
