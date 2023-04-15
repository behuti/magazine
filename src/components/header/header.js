import React from "react";
import { Link } from "react-router-dom";
import styles from "./header.module.scss";

const Header = () => {
  const { Header, HeaderContainer, Logo, MainNavigation } = styles;

  return (
    <header className={Header}>
      <div className={HeaderContainer}>
        <div className={Logo}>EH.</div>
        <ul className={MainNavigation}>
          <li>
            <Link to={"/sports"}>Sports</Link>
          </li>
          <li>
            <Link to={"/fashion"}>Fashion</Link>
          </li>
          <li>
            <Link to={"/tech"}>Tech</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
