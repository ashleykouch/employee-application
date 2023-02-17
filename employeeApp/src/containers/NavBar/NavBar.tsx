import { Link } from "react-router-dom";

import "./NavBar.scss";

import Logo from "../../assets/app-logo.png";

const NavBar = () => {
  return (
    <div className="navbar">
      <Link to="/" className="navbar_logo">
        <img src={Logo} alt="logo" />
      </Link>
    </div>
  );
};

export default NavBar;
