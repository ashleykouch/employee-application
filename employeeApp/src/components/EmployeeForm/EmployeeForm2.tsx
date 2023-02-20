import { useState } from "react";
import "./EmployeeForm.scss";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useForm, SubmitHandler } from "react-hook-form";
import { useMutation, useQueryClient } from "react-query";
import {
  addressRegex,
  emailRegex,
  nameRegex,
  numberRegex,
} from "../RegexComponents/RegexComponents";

enum ContractTypeEnum {
  Permanent = "permanent",
  Contract = "contract",
}

enum WorkTypeEnum {
  FullTime = "full time",
  PartTime = "part time",
}

interface Employee {
  firstName: String;
  middleName: String;
  lastName: String;
  emailId: String;
  mobileNum: String;
  address: String;
  contractType: ContractTypeEnum;
  startDate: String;
  finishedDate: String;
  workType: WorkTypeEnum;
  workHours: String;
}

const createEmployee = async (data: Employee) => {
  const { data: response } = await axios.post(
    "http://localhost:8080/employees",
    data
  );
  return response.data;
};

export const EmployeeForm2 = () => {
  const navigate = useNavigate();

  const [isPermanent, setIsPermanent] = useState(true);

  const handleChange = (e) => {
    if (e.target.name !== "contractType") {
      return;
    }
    if (e.target.value === "contract") {
      setIsPermanent(true);
    } else {
      setIsPermanent(false);
    }
  };

  const handleNavigate = () => {
    navigate("/");
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Employee>({
    mode: "onChange",
  });

  const queryClient = useQueryClient();

  const { mutate, isLoading } = useMutation(createEmployee, {
    onSuccess: (data) => {
      const output = "Success, employee created.";
      alert(output);
    },
    onError: () => {
      alert("An error has occurred");
    },
    onSettled: () => {
      queryClient.invalidateQueries("create");
    },
  });

  const onSubmit = (data: Employee) => {
    const employee = { ...data };
    mutate(employee);
    handleNavigate();
  };

  return (
    <div>
      Hello
      <div className="form-container">
        <div className="form-row">
          <div className="form-card">
            <div className="form-card_body">
              <form className="form_content" onSubmit={handleSubmit(onSubmit)}>
                {/* personal info */}
                <h2 className="form-card_header">Personal Information</h2>
                <div className="form-card_group">
                  <label className="form-card_label">First Name</label>
                  <input
                    {...register("firstName", {
                      required: true,
                      pattern: nameRegex,
                    })}
                  />
                  {errors.firstName &&
                    "First name is missing/invalid characters used."}
                </div>

                <div className="form-card_group">
                  <label className="form-card_label">Middle Name</label>
                  <input
                    {...register("middleName", {
                      pattern: nameRegex,
                    })}
                  />
                  {errors.firstName && "Middle name has invalid characters."}
                </div>

                <div className="form-card_group">
                  <label className="form-card_label">Last Name</label>
                  <input
                    {...register("lastName", {
                      required: true,
                      pattern: nameRegex,
                    })}
                  />
                  {errors.lastName &&
                    "Last name is missing/invalid characters used."}
                </div>

                {/* contact details */}
                <h2 className="form-card_header">Contact Details</h2>
                <div className="form-card_group">
                  <label className="form-card_label">Email Address</label>
                  <input
                    {...register("emailId", {
                      required: true,
                      pattern: emailRegex,
                    })}
                  />
                  {errors.emailId &&
                    "Email address is missing/invalid characters used."}
                </div>

                <div className="form-card_group">
                  <label className="form-card_label">Mobile Number</label>
                  <input
                    type="tel"
                    {...register("mobileNum", {
                      pattern: numberRegex,
                    })}
                  />
                  {errors.mobileNum &&
                    "Mobile number is missing/invalid characters used."}
                </div>

                <div className="form-card_group">
                  <label className="form-card_label">Residential Address</label>
                  <input
                    {...register("address", {
                      required: true,
                      pattern: addressRegex,
                    })}
                  />
                  {errors.address &&
                    "Address is missing/invalid characters used."}
                </div>

                {/* employee status */}
                <h2 className="form-card_header">Employment Status</h2>
                <div className="form-card_group">
                  <label className="form-card_label">
                    What is contract type?
                  </label>

                  <div className="form-card_radio">
                    <input
                      type="radio"
                      value="permanent"
                      id="contractType"
                      onClick={handleChange}
                      {...register("contractType", { required: true })}
                    />
                    <label htmlFor="permanent">Permanent</label>
                  </div>
                  <div className="form-card_radio">
                    <input
                      type="radio"
                      value="contract"
                      id="contractType"
                      onClick={handleChange}
                      {...register("contractType", { required: true })}
                    />
                    <label htmlFor="contract">Contract</label>
                  </div>
                  {errors.contractType &&
                    "Please select one of the options required."}
                </div>

                <div className="form-card_group">
                  <label className="form-card_label">Start Date </label>
                  <input
                    type="date"
                    id="startDate"
                    {...register("startDate", { required: true })}
                  />
                  {errors.startDate && "Start date input required."}
                </div>

                <div className="form-card_group">
                  <label className="form-card_label">Finished Date</label>
                  <input
                    type="date"
                    id="finishedDate"
                    hidden={isPermanent}
                    {...register("finishedDate")}
                  />
                  {errors.finishedDate && "Finished date input is invalid."}
                </div>

                <div className="form-card_group">
                  <label className="form-card_label">
                    Is this on a full time or part time basis?
                  </label>

                  <div className="form-card_radio">
                    <input
                      type="radio"
                      value="fullTime"
                      id="workType"
                      {...register("workType", { required: true })}
                    />
                    <label htmlFor="fullTime">Full-Time</label>
                  </div>

                  <div className="form-card_radio">
                    <input
                      type="radio"
                      value="partTime"
                      id="workType"
                      {...register("workType", { required: true })}
                    />
                    <label htmlFor="partTime">Part-Time</label>
                  </div>
                  {errors.workType && "Employement type must be selected"}
                </div>

                <div className="form-card_group">
                  <label className="form-card_label">Hours per week</label>
                  <input
                    {...register("workHours", {
                      required: true,
                      min: 8,
                      max: 45,
                    })}
                  />
                  {errors.workHours && "Hours per week missing/invalid input."}
                  <input type="submit" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// previous solution

// const EmployeeForm = () => {
// const [firstName, setFirstName] = useState("");
// const [middleName, setMiddleName] = useState("");
// const [lastName, setLastName] = useState("");
// const [emailId, setEmailId] = useState("");
// const [mobileNum, setMobileNum] = useState("");
// const [address, setAddress] = useState("");
// const [contractType, setContractType] = useState("");
// const [startDate, setStartDate] = useState("");
// const [finishedDate, setFinishedDate] = useState("");
// const [workType, setWorkType] = useState("");
// const [hours, setHours] = useState("");

// // handling contract type
// const handleContractTypeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//   setContractType(e.target.value);
// };

// // handling work type
// const handleWorkTypeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//   setWorkType(e.target.value);
// };

// // const history = useHistory();

// const saveEmployee = (e: React.ChangeEvent<HTMLInputElement>) => {
//   e.preventDefault();

//   const employee = {
//     firstName,
//     middleName,
//     lastName,
//     emailId,
//     mobileNum,
//     address,
//     contractType,
//     startDate,
//     finishedDate,
//     workType,
//     hours,
//   };

//   console.log(employee);
//   // EmployeeService.createEmployee(employee)
//   //   .then((res) => {
//   //     console.log(res.data);
//   //   })
//   //   .catch((err) => {
//   //     console.log(err);
//   //   });
// };
// return (
//   <div>
{
  /* <div className="form-container">
        <div className="form-row">
          <div className="form-card">
            <div className="form-card_body">
              <form> */
}
{
  /* Personal Information */
}
{
  /* <h2 className="form-card_header">Personal Information</h2>
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
                </div> */
}

{
  /* Contact details */
}
{
  /* <h2 className="form-card_header">Contact Details</h2>
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
                </div> */
}

{
  /* Employment status */
}
{
  /* <h2 className="form-card_header">Employment Status</h2>
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
                    name="hours"
                    className="form-card_control"
                    value={hours}
                    onChange={(e) => setHours(e.target.value)}
                    required
                  />
                </div> */
}

{
  /* submission buttons */
}
{
  /* <div className="form_btn">
                  <button
                    className="form_btn_save"
                    onClick={(e) => saveEmployee}
                  >
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
      </div> */
}
{
  /* </div>
  );
}; */
}

export default EmployeeForm2;
