import React from "react";
import "./HomePage.scss";
import HomeImg from "../../assets/home-img.jpg";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="home">
      <div className="home_img">
        <img src={HomeImg} alt="HomeImg" />
      </div>
      <div className="home_content">
        <h1 className="home_content_text">
          YOUR SIMPLE EMPLOYEE MANAGEMENT APPLICATION
        </h1>
      </div>
      <div className="home_btn">
        <Link to="/employees">
          <button className="home_btn_view">View employees</button>
        </Link>
        <Link to="/employee-details">
          <button className="home_btn_add">Add Employees</button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
