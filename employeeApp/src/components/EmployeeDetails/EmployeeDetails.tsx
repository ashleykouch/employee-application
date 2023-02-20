import "./EmployeeDetails.scss";
import { EmployeeForm2 } from "../EmployeeForm/EmployeeForm2";
import EmployeeForm from "../EmployeeForm/EmployeeForm";

const EmployeeDetails = () => {
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
