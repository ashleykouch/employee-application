import { useEffect, useState } from "react";
import EmployeeService from "../../services/EmployeeService";
import "./EmployeeList.scss";
import { Link } from "react-router-dom";

const EmployeeList = () => {
  // create a useState to list employees
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    EmployeeService.getAllEmployees()
      .then((res) => {
        setEmployees(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="employees">
      <h2 className="employees-header">Employees' List</h2>
      <div className="employees-title">
        <p>Please click on "Edit" to find more details of each employee</p>
        <Link to="/employee-details">
          <button className="employee-btn">Add Employee</button>
        </Link>
      </div>
    </div>
  );
};

export default EmployeeList;
