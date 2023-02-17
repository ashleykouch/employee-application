package io.nology.employeeAppbackend.employee;

// Spring framework imports
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

// Java util imports
import java.util.List;
import java.util.Optional;

import javax.validation.Valid;

@RestController
@RequestMapping("/employees")
public class EmployeeController {
    
// Dependency injection pattern - CRUD methods

    @Autowired
    private EmployeeService service;

    // Get methods
   @GetMapping
    public ResponseEntity<List<Employee>> getAll() {
    List<Employee> allEmployees = this.service.getAll();
    return new ResponseEntity<>(allEmployees, HttpStatus.OK);
   }

   @GetMapping("/{id}")
   public ResponseEntity<Employee> getById(@PathVariable Long id) {
    Optional<Employee> employeeId = this.service.getById(id);
    if (employeeId.isEmpty()) {
        return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
        }
    return new ResponseEntity<>(employeeId.get(), HttpStatus.OK);
    }

    // TODO: post methods

    // Post methods

    @PostMapping
    public ResponseEntity<Employee> create(@Valid @RequestBody EmployeeDTO data) {
        Employee createdEmployee = this.service.create(data);
        return new ResponseEntity<Employee>(createdEmployee, HttpStatus.CREATED);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Employee> delete(@PathVariable Long id) {
        boolean isDeleted = this.service.delete(id);

        if(isDeleted) {
            return new ResponseEntity<>(null, HttpStatus.NO_CONTENT);
        }

        return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
    }


    // TODO: update methods

    // TODO: delete methods
}

