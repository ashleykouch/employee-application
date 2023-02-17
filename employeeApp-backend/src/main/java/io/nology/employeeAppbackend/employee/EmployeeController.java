package io.nology.employeeAppbackend.employee;

// spring framework imports
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

// java util imports
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/employees")
public class EmployeeController {
    
// dependency injection pattern - CRUD methods

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
}

