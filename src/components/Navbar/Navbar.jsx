import React from "react";
import "./Navbar.scss";
import logo from "../../assets/logo.png";
import phone from "../../assets/phone.png";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar__wrapper">
        <img src={logo} className="navbar__logo" />
        <ul className="navbar__menu">
          <li className="navbar__list">
            <NavLink className={"navbar__link"} to={"/"}>
              Asosiy
            </NavLink>
          </li>
          <li className="navbar__list">
            <NavLink className={"navbar__link"} to={"/news"}>
              Yangiliklar
            </NavLink>
          </li>
          <li className="navbar__list">
            <NavLink className={"navbar__link"} to={"/about"}>
              Biz haqimizda
            </NavLink>
          </li>
          <li className="navbar__list">
            <NavLink className={"navbar__link"} to={"/portfolio"}>
              Portfolio
            </NavLink>
          </li>
        </ul>
        <a href="/#contact" className="navbar__btn">
          <img src={phone} className="navbar__icon" />
          Bog’lanish
        </a>
      </div>
    </div>
  );
};

export default Navbar;
