import PersonalInfoCard from "../../containers/PersonalInfoCard/PersonalInfoCard";
import "./EmployeeDetails.scss";

import { Link } from "react-router-dom";
import { useState } from "react";

const EmployeeDetails = () => {
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");

  const saveEmployee = (e) => {
    e.preventDefault();

    const employee = { firstName, middleName, lastName };

    console.log(employee);
  };
  return (
    <div className="details">
      <h2 className="details_header">Employee Details</h2>
      <div className="details_info">
        <PersonalInfoCard />
      </div>
      {/* 
      <button className="form_button" onClick={(e) => saveEmployee(e)}>
        Save
      </button> */}

      <button className="form_button" onClick={(e) => saveEmployee(e)}>
        Save
      </button>
      <Link to="/employees">
        <button className="details_btn">Cancel</button>
      </Link>
    </div>
  );
};

export default EmployeeDetails;
