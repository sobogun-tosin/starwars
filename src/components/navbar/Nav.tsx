import React from "react";
import "./Nav.scss";
import logo from "../../images/starwar-logo.png";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <Link to={"/"} className="nav-body">
        <img src={logo} alt="logo" />
      </Link>
    </nav>
  );
};

export default Nav;
