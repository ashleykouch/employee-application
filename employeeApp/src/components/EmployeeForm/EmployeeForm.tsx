import { useState } from "react";
import "./EmployeeForm.scss";
import { Link } from "react-router-dom";

const EmployeeForm = () => {
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailId, setEmailId] = useState("");
  const [mobileNum, setMobileNum] = useState("");
  const [address, setAddress] = useState("");

  const saveEmployee = (e) => {
    e.preventDefault();

    const employee = {
      firstName,
      middleName,
      lastName,
      emailId,
      mobileNum,
      address,
    };
    console.log(employee);
  };
  return (
    <div>
      <div className="form-container">
        <div className="form-row">
          <div className="form-card">
            <div className="form-card_body">
              <form>
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

                {/* submission buttons */}
                <button
                  className="form_button"
                  onClick={(e) => saveEmployee(e)}
                >
                  Save
                </button>
                <Link to="/employees">
                  <button className="details_btn">Cancel</button>
                </Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeForm;
