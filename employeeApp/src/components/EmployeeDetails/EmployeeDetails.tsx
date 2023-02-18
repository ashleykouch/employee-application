import "./EmployeeDetails.scss";
import EmployeeForm from "../EmployeeForm/EmployeeForm";

import { Link } from "react-router-dom";
import { useState } from "react";

const EmployeeDetails = () => {
  return (
    <div className="details">
      <h2 className="details_header">Employee Details</h2>
      <div className="details_info">
        <EmployeeForm />
      </div>
    </div>
  );
};

export default EmployeeDetails;
