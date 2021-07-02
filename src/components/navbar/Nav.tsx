import React from "react";
import styles from "./Nav.module.scss";
import logo from "../../images/starwar-logo.png";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <Link to={"/"} className={styles.nav__body}>
        <img src={logo} alt="logo" className={styles.nav__img} />
      </Link>
    </nav>
  );
};

export default Nav;
