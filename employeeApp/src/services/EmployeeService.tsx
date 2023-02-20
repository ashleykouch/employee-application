import axios from "axios";

const EMPLOYEE_BASE_REST_API_URL = "http://localhost:8080/employees";

class EmployeeService {
  getAllEmployees() {
    return axios.get(EMPLOYEE_BASE_REST_API_URL);
  }

  createEmployee(employees: {
    firstName: string;
    middleName: string;
    lastName: string;
    emailId: string;
    mobileNum: string;
    address: string;
    contractType: string;
    startDate: string;
    finishedDate: string;
    workType: string;
    hours: string;
  }) {
    return axios.post(EMPLOYEE_BASE_REST_API_URL, employees);
  }

  deleteEmployee(employeeId: number) {
    return axios.delete(EMPLOYEE_BASE_REST_API_URL + "/" + employeeId);
  }
}

export default new EmployeeService();
