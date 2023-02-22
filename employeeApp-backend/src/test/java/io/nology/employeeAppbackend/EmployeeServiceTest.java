package io.nology.employeeAppbackend;

// util imports
import java.util.List;
import java.util.Optional;

// spring framework imports
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.test.context.junit4.SpringRunner;

// entity imports
import io.nology.employeeAppbackend.employee.Employee;
import io.nology.employeeAppbackend.employee.EmployeeDTO;
import io.nology.employeeAppbackend.employee.EmployeeService;
import io.nology.employeeAppbackend.employee.EmployeeUpdateDTO;

// unit test imports
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;

// assertion imports
import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.Assert.assertTrue;
import static org.junit.Assert.assertEquals;


@RunWith(SpringRunner.class)
@DataJpaTest
public class EmployeeServiceTest {
    
    @Autowired
    private EmployeeService employeeService;
    private EmployeeDTO employee;
    private EmployeeUpdateDTO updateEmployee;

    @Before
    public void employeeSetUp() {
        employee = new EmployeeDTO();
            employee.setFirstName("john");
            employee.setMiddleName("test");
            employee.setLastName("doe");
            employee.setEmailId("johntestdoe@mail.com");
            employee.setMobileNum("1234567890");
            employee.setAddress("123 Example St, Sydney NSW 2000");
            employee.setContractType("permanent");
            employee.setStartDate("2022-01-01");
            employee.setFinishedDate("2023-01-01");
            employee.setWorkType("fullTime");
            employee.setWorkHours("35");

        updateEmployee = new EmployeeUpdateDTO();
            updateEmployee.setFirstName("jane");
            updateEmployee.setMiddleName("update");
            updateEmployee.setLastName("doe");
            updateEmployee.setEmailId("janeupdatedoe@mail.com");
            updateEmployee.setMobileNum("0987654321");
            updateEmployee.setAddress("321 Update St, Sydney NSW 2000");
            updateEmployee.setContractType("contract");
            updateEmployee.setStartDate("2012-12-12");
            updateEmployee.setFinishedDate("2022-12-12");
            updateEmployee.setWorkType("partTime");
            updateEmployee.setWorkHours("16");
    }

    @Test
    public void getAllTest() {
        Employee savedEmployees = employeeService.create(employee);
        List<Employee> employeeList = employeeService.getAll();
        assertThat(employeeList).hasSize(1);
        assertThat(employeeList).contains(savedEmployees);
    }

    @Test
    public void getByIdTest() {
        Employee savedEmployees = employeeService.create(employee);
        Optional<Employee> found = employeeService.getById(savedEmployees.getId());
        assertTrue(found.isPresent());
        assertEquals(savedEmployees, found.get());
    }

    @Test
    public void deleteTest() {
        Employee savedEmployees = employeeService.create(employee);
        employeeService.delete(savedEmployees.getId());
        Optional<Employee> found = employeeService.getById(savedEmployees.getId());
        assertThat(found).isNull();
    }


}
