package io.nology.employeeAppbackend.employee;

// Logger imports
import org.slf4j.LoggerFactory;
import org.slf4j.Logger;

// Spring framework imports
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import java.time.LocalDate;
// Java util imports
import java.util.List;
import java.util.Optional;

// Java validation imports
import javax.validation.Valid;

@RestController
@RequestMapping("/employees")
public class EmployeeController {
    
    Logger user = LoggerFactory.getLogger(EmployeeController.class);

    // Dependency injection pattern - CRUD methods
    @Autowired
    private EmployeeService service;

    // Get methods
    @CrossOrigin
    @GetMapping

    public ResponseEntity<List<Employee>> getAll() {
     List<Employee> allEmployees = this.service.getAll();
     if(allEmployees.isEmpty()) {
        user.error("No employees found, please add Employees as required");
        return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
     } 
        user.info("Employees successfully found");
        return new ResponseEntity<>(allEmployees, HttpStatus.OK);
    }

   @CrossOrigin
   @GetMapping("/{id}")
   public ResponseEntity<Employee> getById(@PathVariable Long id) {
    try {
    Optional<Employee> employeeId = this.service.getById(id);
    if (employeeId.isEmpty()) {
        user.error("Employee " + id + " was not found"); 
            return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
        }
        user.info("Employee " + id + " found");
            return new ResponseEntity<>(employeeId.get(), HttpStatus.OK);
    } catch (Exception e) {
        user.error("Something went wrong");
        return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

       // Post methods
    @CrossOrigin
    @PostMapping
    public ResponseEntity<Employee> create(@Valid @RequestBody EmployeeDTO data) {
        try {
            LocalDate startDate = LocalDate.parse(data.getStartDate());
            LocalDate finishedDate = LocalDate.parse(data.getFinishedDate());

            if(finishedDate.isBefore(startDate)) {
                user.error("Finished data cannot be before start date");
                return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
            }
              Employee createdEmployee = this.service.create(data);
              return new ResponseEntity<>(createdEmployee,HttpStatus.CREATED);
        } catch (Exception e) {
            user.error("Employee could not be added", e);
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }


    // Delete methods
    @CrossOrigin
    @DeleteMapping("/{id}")
    public ResponseEntity<Employee> delete(@PathVariable Long id) {
        try {
        boolean isDeleted = this.service.delete(id);
        if(isDeleted) {
            user.error("No employee existed for deletion");
            return new ResponseEntity<>(null, HttpStatus.NO_CONTENT);
        }
            user.info("Employee successfully deleted");
            return new ResponseEntity<>(null, HttpStatus.OK);
        } catch (Exception e) {
            user.error("Something went wrong");
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    // Update Methods
    @CrossOrigin
    @PutMapping("/{id}")
    public ResponseEntity<Employee> update(@PathVariable Long id,       @RequestBody EmployeeUpdateDTO data) {
        try {
        Optional<Employee> optionalEmployee = this.service.getById(id);
        if (optionalEmployee.isEmpty()) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "No employee found with id: " + id);
        }

        LocalDate startDate = LocalDate.parse(data.getStartDate());
            LocalDate finishedDate = LocalDate.parse(data.getFinishedDate());

        if(finishedDate.isBefore(startDate)) {
            user.error("Finished data cannot be before start date");
                return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
            }
        
        Employee employee = optionalEmployee.get();

        Employee updatedEmployee = this.service.update(id, data, employee);
        return new ResponseEntity<>(updatedEmployee, HttpStatus.OK);
        } catch (Exception e) {
            user.error("Employee could not be added", e);
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
       
    }
}

