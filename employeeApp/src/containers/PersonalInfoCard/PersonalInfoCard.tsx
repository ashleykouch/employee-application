import { useState } from "react";

import "./PersonalInfoCard.scss";

const PersonalInfoCard = () => {
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");

  return (
    <div>
      <div className="form-container">
        <div className="form-row">
          <div className="form-card">
            <h2 className="form-card_header">Personal Information</h2>
            <div className="form-card_body">
              <form>
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
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfoCard;
