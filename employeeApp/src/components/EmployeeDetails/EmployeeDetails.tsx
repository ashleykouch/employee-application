import "./EmployeeDetails.scss";
import EmployeeForm from "../EmployeeForm/EmployeeForm";
import { useEffect, useState } from "react";
import EmployeeService from "../../services/EmployeeService";
import { useParams } from "react-router";

const EmployeeDetails = () => {
  const [employeeDetails, setEmployeeDetails] = useState();
  const { id } = useParams();

  useEffect(() => {
    EmployeeService.getByEmployeeId(Number(id))
      .then((res) => {
        console.log(res.data);
        setEmployeeDetails(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="details">
      <h2 className="details_header">Employee Details</h2>
      <div className="details_info">
        <EmployeeForm />
        {/* <EmployeeForm2 /> */}
      </div>
    </div>
  );
};

export default EmployeeDetails;
