import React from "react";
import "./HomePage.scss";
import HomeImg from "../../assets/home-img.jpg";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="home">
      <Link to="/employees">View employees</Link>
      <div className="home_img">
        <img src={HomeImg} alt="HomeImg" />
      </div>
      <div className="home_content">
        <p>Your simple employee management application</p>
      </div>
    </div>
  );
};

export default HomePage;
