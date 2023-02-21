import { useEffect, useState } from "react";
import "./EmployeeForm.scss";
import { Link } from "react-router-dom";
import EmployeeService from "../../services/EmployeeService";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router";

interface Props {
  employeeDetails: any;
}

const EmployeeForm = ({ employeeDetails }: Props) => {
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailId, setEmailId] = useState("");
  const [mobileNum, setMobileNum] = useState("");
  const [address, setAddress] = useState("");
  const [contractType, setContractType] = useState("");
  const [startDate, setStartDate] = useState("");
  const [finishedDate, setFinishedDate] = useState("");
  const [workType, setWorkType] = useState("");
  const [workHours, setWorkHours] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    setFirstName(employeeDetails?.firstName);
    setMiddleName(employeeDetails?.middleName);
    setLastName(employeeDetails?.lastName);
    setEmailId(employeeDetails?.emailId);
    setMobileNum(employeeDetails?.mobileNum);
    setAddress(employeeDetails?.address);
    setContractType(employeeDetails?.contractType);
    setStartDate(employeeDetails?.startDate);
    setFinishedDate(employeeDetails?.finishedDate);
    setWorkType(employeeDetails?.workType);
    setWorkHours(employeeDetails?.workHours);
    console.log(employeeDetails, "details");
  }, [employeeDetails]);

  // handling contract type
  const handleContractTypeChange = (e: any) => {
    setContractType(e.target.value);
  };

  // handling work type
  const handleWorkTypeChange = (e: any) => {
    setWorkType(e.target.value);
  };

  const saveOrUpdateEmployee = (e: any) => {
    e.preventDefault();

    const employee = {
      firstName,
      middleName,
      lastName,
      emailId,
      mobileNum,
      address,
      contractType,
      startDate,
      finishedDate,
      workType,
      workHours,
    };

    console.log(employee);

    if (id) {
      EmployeeService.updateEmployee(id, employee)
        .then((res) => {
          console.log(res.data);
          navigate("/employees");
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      EmployeeService.createEmployee(employee)
        .then((res) => {
          console.log(res.data);
          navigate("/employees");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  // handle form errors

  return (
    <div>
      <div className="form-container">
        <div className="form-row">
          <div className="form-card">
            <Link to="/employees">
              <h3>Back</h3>
            </Link>
            <div className="form-card_body">
              <form onSubmit={saveOrUpdateEmployee}>
                {/* Personal Information */}
                <h2 className="form-card_header">Personal Information</h2>
                <div className="form-card_group">
                  <label className="form-card_label">First Name </label>
                  <input
                    type="text"
                    placeholder="John"
                    name="firstName"
                    className="form-card_control"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                  />
                </div>

                <div className="form-card_group">
                  <label className="form-card_label">Middle Name </label>
                  <input
                    type="text"
                    placeholder=""
                    name="middleName"
                    className="form-card_control"
                    value={middleName}
                    onChange={(e) => setMiddleName(e.target.value)}
                  />
                </div>

                <div className="form-card_group">
                  <label className="form-card_label">Last Name </label>
                  <input
                    type="text"
                    placeholder="Doe"
                    name="lastName"
                    className="form-card_control"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                  />
                </div>

                {/* Contact details */}
                <h2 className="form-card_header">Contact Details</h2>
                <div className="form-card_group">
                  <label className="form-card_label">Email Address </label>
                  <input
                    type="text"
                    placeholder="john.doe@mail.com"
                    name="emailId"
                    className="form-card_control"
                    value={emailId}
                    onChange={(e) => setEmailId(e.target.value)}
                    required
                  />
                </div>

                <div className="form-card_group">
                  <label className="form-card_label">Mobile Number </label>
                  <p className="form-card_text">Must be an Australian Number</p>
                  <input
                    type="tel"
                    placeholder="+61 123 456 789 "
                    name="mobileNum"
                    className="form-card_control"
                    value={mobileNum}
                    onChange={(e) => setMobileNum(e.target.value)}
                    required
                  />
                </div>

                <div className="form-card_group">
                  <label className="form-card_label">
                    Residential Address{" "}
                  </label>
                  <input
                    type="text"
                    placeholder="123 Example St, Sydney NSW 2000"
                    name="address"
                    className="form-card_control"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    required
                  />
                </div>

                {/* Employment status */}
                <h2 className="form-card_header">Employment Status</h2>
                <div className="form-card_group">
                  <label className="form-card_label">
                    What is contract type?
                  </label>

                  <div className="form-card_radio">
                    <input
                      type="radio"
                      id="permanent"
                      name="contractType"
                      value="permanent"
                      checked={contractType === "permanent"}
                      onChange={handleContractTypeChange}
                      required
                    />
                    <label htmlFor="permanent">Permanent</label>
                  </div>
                  <div className="form-card_radio">
                    <input
                      type="radio"
                      id="contract"
                      name="contractType"
                      value="contract"
                      checked={contractType === "contract"}
                      onChange={handleContractTypeChange}
                    />
                    <label htmlFor="contract">Contract</label>
                  </div>
                </div>

                <div className="form-card_group">
                  <label className="form-card_label">Start Date </label>
                  <input
                    type="date"
                    name="startDate"
                    className="form-card_control"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                  />
                </div>

                <div className="form-card_group">
                  <label className="form-card_label">Finished Date</label>
                  <input
                    type="date"
                    name="finishedDate"
                    className="form-card_control"
                    value={finishedDate}
                    onChange={(e) => setFinishedDate(e.target.value)}
                    required
                  />
                </div>

                <div className="form-card_group">
                  <label className="form-card_label">
                    Is this on a full time or part time basis?
                  </label>

                  <div className="form-card_radio">
                    <input
                      type="radio"
                      id="fullTime"
                      name="workType"
                      value="fullTime"
                      checked={workType === "fullTime"}
                      onChange={handleWorkTypeChange}
                    />
                    <label htmlFor="fullTime">Full-Time</label>
                  </div>

                  <div className="form-card_radio">
                    <input
                      type="radio"
                      id="partTime"
                      name="workType"
                      value="partTime"
                      checked={workType === "partTime"}
                      onChange={handleWorkTypeChange}
                    />
                    <label htmlFor="partTime">Part-Time</label>
                  </div>
                </div>

                <div className="form-card_group">
                  <label className="form-card_label">Hours per week</label>
                  <input
                    type="text"
                    placeholder="35"
                    name="workHours"
                    className="form-card_control"
                    value={workHours}
                    onChange={(e) => setWorkHours(e.target.value)}
                    required
                  />
                </div>

                {/* submission buttons */}

                <div className="form_btn">
                  <button type="submit" className="form_btn_save">
                    Save
                  </button>
                  <Link to="/employees">
                    <button className="form_btn_cancel">Cancel</button>
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeForm;
