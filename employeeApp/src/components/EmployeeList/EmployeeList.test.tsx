import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Switch,
  MemoryRouter,
} from "react-router-dom";
import EmployeeList from "./EmployeeList";

const EmployeeMockUp = {
  id: "20",
  firstName: "Employee",
  middleName: "",
  lastName: "Tester",
  emailId: "employee.tester@mail.com",
  mobileNum: "1234567890",
  address: "123 Example St, Sydney NSW 2000",
  contractType: "permanent",
  startDate: "2020-02-20",
  finishedDate: "2025-02-20",
  workType: "fullTime",
  workHours: "35",
};

describe("EmployeeList", () => {
  it("should display a full name", () => {
    render(<EmployeeList employeeDetails={EmployeeMockUp} />, {
      wrapper: MemoryRouter,
    });
    const name = screen.getByText(/employee tester/i);
    expect(name).toBeInTheDocument();
  });

  it("should display contract type", () => {
    render(<EmployeeList employeeDetails={EmployeeMockUp} />, {
      wrapper: MemoryRouter,
    });
    const employmentType = screen.getByText(/permanent/i);
    expect(employmentType).toBeInTheDocument();
  });

  it("should display email", () => {
    render(<EmployeeList employeeDetails={EmployeeMockUp} />, {
      wrapper: MemoryRouter,
    });
    const email = screen.getByText(/employee.tester@mail.com/i);
    expect(email).toBeInTheDocument();
  });
});
