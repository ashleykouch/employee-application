import { useState } from "react";
import styles from "./EmployeeList.module.scss";

const EmployeeList = () => {
  // create a useState to list employees
  const [employees, setEmployees] = useState([]);

  return (
    <div className={styles.container}>
      <h2 className={styles.header}>Employees' List</h2>
    </div>
  );
};

export default EmployeeList;
