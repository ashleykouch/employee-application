import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Switch,
  MemoryRouter,
} from "react-router-dom";
import EmployeeList from "./EmployeeList";
import axios from "axios";

const EmployeeMockUp = [
  {
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
  },
  {
    id: "30",
    firstName: "Employee2",
    middleName: "",
    lastName: "Tester2",
    emailId: "employee.tester2@mail.com",
    mobileNum: "0987654321",
    address: "123 Example St, Sydney NSW 2000",
    contractType: "contract",
    startDate: "2020-06-20",
    finishedDate: "2025-06-20",
    workType: "partTime",
    workHours: "16",
  },
];

describe("EmployeeList", () => {
  it("should display a full name", () => {
    vi.spyOn(axios, "get").mockResolvedValueOnce(EmployeeMockUp);
    render(<EmployeeList />, {
      wrapper: MemoryRouter,
    });
    const name = screen.getByText(/employee tester/i);
    expect(name).toBeInTheDocument();
  });

  it("should display contract type", () => {
    vi.spyOn(axios, "get").mockResolvedValueOnce(EmployeeMockUp);
    render(<EmployeeList />, {
      wrapper: MemoryRouter,
    });
    const employmentType = screen.getByText(/permanent/i);
    expect(employmentType).toBeInTheDocument();
  });

  it("should display email", () => {
    vi.spyOn(axios, "get").mockResolvedValueOnce(EmployeeMockUp);
    render(<EmployeeList />, {
      wrapper: MemoryRouter,
    });
    const email = screen.getByText(/employee.tester@mail.com/i);
    expect(email).toBeInTheDocument();
  });
});
