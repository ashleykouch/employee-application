import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./containers/NavBar/NavBar";
import HomePage from "./components/HomePage/HomePage";
import EmployeeList from "./components/EmployeeList/EmployeeList";
import EmployeeDetails from "./components/EmployeeDetails/EmployeeDetails";
import EmployeeForm from "./components/EmployeeForm/EmployeeForm";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/employees" element={<EmployeeList />}></Route>
          <Route path="/employee-details" element={<EmployeeDetails />}></Route>
          <Route
            path="/edit-employee-details/:id"
            element={<EmployeeDetails />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
