import React from "react";
import "./Footer.scss";
import logo from "../../assets/logo2.png";
import mail from "../../assets/mail.png";
import phone from "../../assets/phone.png";
import instagram from "../../assets/Instagram.png";
import phoneicon from "../../assets/phoneicon.png";
import location from "../../assets/location.png";
import tg from "../../assets/tgicon.png";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__wrapper">
        <img src={logo} className="footer__logo" />
        <ul className="footer__menu">
          <li className="footer__list">
            <NavLink to={"/"} className={"footer__link"}>
              Asosiy
            </NavLink>
          </li>
          <li className="footer__list">
            <NavLink to={"/news"} className={"footer__link"}>
              Yangiliklar
            </NavLink>
          </li>
          <li className="footer__list">
            <NavLink to={"/about"} className={"footer__link"}>
              Biz haqimizda
            </NavLink>
          </li>
          <li className="footer__list">
            <NavLink to={"/portfolio"} className={"footer__link"}>
              Portfolio
            </NavLink>
          </li>
        </ul>
        <div className="footer__address">
          <div className="footer__card">
            <img src={phone} className="footer__addressicon" />
            <p className="footer__text">+998 77 412 15 06</p>
          </div>
          <div className="footer__card">
            <img src={mail} className="footer__addressicon" />
            <p className="footer__text">tasviriyooyina.uz@yandex.uz</p>
          </div>
          <div className="footer__card">
            <img src={location} className="footer__addressicon" />
            <p className="footer__text">O'zbekiston barcha hududlarda</p>
          </div>
        </div>
        <div className="footer__icons">
          <a href="https://telegram.org" className="footer__icon">
            <img src={tg} className="footer__iconimg" />
          </a>
          <a href="https://telegram.org" className="footer__icon">
            <img src={phoneicon} className="footer__iconimg" />
          </a>
          <a href="https://telegram.org" className="footer__icon">
            <img src={instagram} className="footer__iconimg" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
