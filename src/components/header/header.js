import React from "react";
import { Link } from "react-router-dom";
import styles from "./header.module.scss";

const Header = () => {
  const { Header, HeaderContainer, Logo, MainNavigation, LogoLink } = styles;

  return (
    <header className={Header}>
      <div className={HeaderContainer}>
        <div className={Logo}>
          <Link to={'/'} className={LogoLink}>
            EH.
          </Link>
        </div>
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
