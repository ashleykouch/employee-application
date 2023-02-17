import { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./containers/NavBar/NavBar";
import HomePage from "./components/HomePage/HomePage";
import EmployeeList from "./components/EmployeeList/EmployeeList";
import EmployeeDetails from "./components/EmployeeDetails/EmployeeDetails";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/employees" element={<EmployeeList />}></Route>
          <Route path="/employee-details" element={<EmployeeDetails />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
