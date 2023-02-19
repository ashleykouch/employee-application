import { useEffect, useState } from "react";
import EmployeeService from "../../services/EmployeeService";
import "./EmployeeList.scss";
import { Link } from "react-router-dom";

interface Employee {
  id: number;
  firstName: string;
  middleName: String;
  lastName: String;
  contractType: String;
  emailId: String;
  startDate: String | Number;
  endDate: String | Number;
}

const EmployeeList = () => {
  // create a useState to list employees
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    getAllEmployees();
  }, []);

  const getAllEmployees = () => {
    EmployeeService.getAllEmployees()
      .then((res) => {
        setEmployees(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // delete employee
  const deleteEmployee = (id: number) => {
    EmployeeService.deleteEmployee(id)
      .then((res) => {
        getAllEmployees();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // TODO: fix function
  // calculating contract in years
  // function calculateEmployeeTenureInYears(employee: Employee): number {
  //   const startDate = new Date(employee.startDate);
  //   const endDate = new Date(employee.endDate);
  //   const diffInMs = endDate.getTime() - startDate.getTime();
  //   const diffInYears = diffInMs / (1000 * 60 * 60 * 24 * 365.25);
  //   return Math.floor(diffInYears);
  // }

  return (
    <div className="employees">
      <h2 className="employees_header">Employees' List</h2>
      <div className="employees_title">
        <p>Please click on "Edit" to find more details of each employee</p>
        <Link to="/employee-details">
          <button className="employees_btn">Add Employee</button>
        </Link>
      </div>

      <div className="employees_card_file">
        {employees.map((employee: Employee) => (
          <>
            <div key={employee.id} className="employees_card">
              <div className="employees_card_content">
                <h3>
                  {employee.firstName} {employee.lastName}
                </h3>
                <p>{employee.contractType} </p>
                <p>{employee.emailId}</p>
              </div>
              <div className="employees_card_actions">
                <button className="employees_card_actions_btn">Edit</button>
                <div className="vl"></div>
                <button
                  className="employees_card_actions_btn"
                  onClick={() => deleteEmployee(employee.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default EmployeeList;
