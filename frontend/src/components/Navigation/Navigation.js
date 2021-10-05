import style from "./Navigation.module.css";
import React from "react";
import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <nav className={style.nav__bar}>
      <ul className={style.nav__links}>
        <li className={style.nav__link}>
          <NavLink
            to="/sms"
            className={style.nav__link}
            activeClassName={style["nav__link-active"]}
          >
            SMS
          </NavLink>
        </li>
        <li className={style.nav__link}>
          <NavLink
            to="/open-tok"
            className={style.nav__link}
            activeClassName={style["nav__link-active"]}
          >
            OpenTok
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
