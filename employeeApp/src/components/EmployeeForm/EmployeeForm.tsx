import { useEffect, useState } from "react";
import "./EmployeeForm.scss";
import { Link } from "react-router-dom";
import EmployeeService from "../../services/EmployeeService";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router";
import { useForm, SubmitHandler } from "react-hook-form";
import {
  addressRegex,
  emailRegex,
  nameRegex,
  numberRegex,
} from "../commonRegex/commonRegex";

enum ContractTypeEnum {
  Permanent = "permanent",
  Contract = "contract",
}

enum WorkTypeEnum {
  PartTime = "part time",
  FullTime = "full time",
}

interface Employee {
  firstName: string;
  middleName: string;
  lastName: string;
  emailId: string;
  mobileNum: string;
  address: string;
  contractType: ContractTypeEnum;
  startDate: string;
  finishedDate: string;
  workType: WorkTypeEnum;
  workHours: string;
}

const EmployeeForm = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  // useForm state
  const [error, setError] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Employee>({
    defaultValues: async () =>
      await EmployeeService.getByEmployeeId(Number(id)),
  });
  console.log(
    EmployeeService.getByEmployeeId(38).then((res) => console.log(res))
  );

  const onSubmit = (data: Employee) => {
    console.log(data, "data");
    try {
      if (id) {
        EmployeeService.updateEmployee(id, data)
          .then((res) => {
            console.log(res.data);
            navigate("/employees");
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        EmployeeService.createEmployee(data)
          .then((res) => {
            console.log(res.data);
            navigate("/employees");
          })
          .catch((err) => {
            console.log(err);
          });
      }
    } catch (e) {
      console.log(e);
    }
  };

  const [isPermanent, setIsPermanent] = useState(true);

  const handleContractType = (e) => {
    if (e.target.name !== "contractType") {
      return;
    }
    if (e.target.value === "permanent") {
      setIsPermanent(true);
    } else {
      setIsPermanent(false);
    }
  };

  return (
    <div>
      <div className="form-container">
        <div className="form-row">
          <div className="form-card">
            <Link to="/employees">
              <h3>Back</h3>
            </Link>
            <div className="form-card_body">
              <form onSubmit={handleSubmit(onSubmit)}>
                {/* Personal Information */}
                <h2 className="form-card_header">Personal Information</h2>
                <div className="form-card_group">
                  <label className="form-card_label">First Name* </label>
                  <div className="form-card_errors">
                    {errors.firstName &&
                      "First name is missing/invalid characters used"}
                  </div>
                  <input
                    {...register("firstName", {
                      required: true,
                      pattern: nameRegex,
                    })}
                  />
                </div>
                <div className="form-card_group">
                  <label className="form-card_label">Middle Name </label>
                  <input
                    {...register("middleName", {
                      pattern: nameRegex,
                    })}
                  />
                </div>
                <div className="form-card_group">
                  <label className="form-card_label">Last Name* </label>
                  <div className="form-card_errors">
                    {errors.lastName &&
                      "Last Name is missing/invalid characters used"}
                  </div>
                  <input
                    {...register("lastName", {
                      required: true,
                      pattern: nameRegex,
                    })}
                  />
                </div>
                {/* Contact details */}
                <h2 className="form-card_header">Contact Details</h2>
                <div className="form-card_group">
                  <label className="form-card_label">Email Address* </label>
                  <div className="form-card_errors">
                    {errors.emailId &&
                      "Email address is missing/invalid characters used"}
                  </div>
                  <input
                    {...register("emailId", {
                      required: true,
                      pattern: emailRegex,
                    })}
                  />
                </div>
                <div className="form-card_group">
                  <label className="form-card_label">Mobile Number </label>
                  <p className="form-card_text">Must be an Australian Number</p>
                  <div className="form-card_errors">
                    {errors.mobileNum &&
                      "Mobile number is missing/invalid characters used"}
                  </div>
                  <input
                    type="tel"
                    {...register("mobileNum", {
                      required: true,
                      pattern: numberRegex,
                    })}
                  />
                </div>
                <div className="form-card_group">
                  <label className="form-card_label">
                    Residential Address{" "}
                  </label>
                  <div className="form-card_errors">
                    {errors.address &&
                      "Residential address is missing/invalid characters used"}
                  </div>
                  <input
                    {...register("address", {
                      required: true,
                      pattern: addressRegex,
                    })}
                  />
                </div>
                {/* Employment status */}
                <h2 className="form-card_header">Employment Status</h2>
                <div className="form-card_group">
                  <label className="form-card_label">
                    What is contract type?
                  </label>
                  <div className="form-card_errors">
                    {errors.contractType && "Contract type must be selected."}
                  </div>
                  <div className="form-card_radio">
                    <div>
                      <input
                        type="radio"
                        value="permanent"
                        name="contractType"
                        onClick={handleContractType}
                        {...register("contractType", { required: true })}
                      />
                      Permanent
                    </div>
                    <div>
                      <input
                        type="radio"
                        value="contract"
                        name="contractType"
                        onClick={handleContractType}
                        {...register("contractType", { required: true })}
                      />
                      Contract
                    </div>
                  </div>
                </div>
                <div className="form-card_group">
                  <label className="form-card_label">Start Date </label>
                  <div className="form-card_errors">
                    {errors.startDate && "Start date must be selected"}
                  </div>
                  <input
                    type="date"
                    {...register("startDate", {
                      required: true,
                    })}
                  />
                </div>
                <div className="form-card_group">
                  <label className="form-card_label">Finished Date</label>
                  <div className="form-card_errors">
                    {errors.finishedDate && "Finished date must be selected"}
                  </div>
                  <input
                    type="date"
                    name="finishedDate"
                    hidden={isPermanent}
                    {...register("finishedDate")}
                  />
                </div>
                <div className="form-card_group">
                  <label className="form-card_label">
                    Is this on a full time or part time basis?
                  </label>
                  <div className="form-card_errors">
                    {errors.workType && "Employment type must be selected"}
                  </div>
                  <div className="form-card_radio">
                    <div>
                      <input
                        type="radio"
                        value="fullTime"
                        name="workType"
                        {...register("workType", { required: true })}
                      />
                      Full Time
                    </div>

                    <div className="form-card_radio">
                      <input
                        type="radio"
                        value="partTime"
                        name="workType"
                        {...register("workType", { required: true })}
                      />
                      Part Time
                    </div>
                  </div>
                </div>
                <div className="form-card_group">
                  <label className="form-card_label">Hours per week</label>
                  <div className="form-card_errors">
                    {errors.workHours && "Hours per week missing/invalid"}
                  </div>
                  <input
                    {...register("workHours", {
                      required: true,
                      min: 8,
                      max: 45,
                      pattern: numberRegex,
                    })}
                  />
                </div>
                {/* submission buttons */}
                <div className="form_btn">
                  <input type="submit" className="form_btn_save" />
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
