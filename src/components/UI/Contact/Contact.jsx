import React from "react";
import "./Contact.scss";
import flower from "../../../assets/flower.png";
import yellowarrow from "../../../assets/yellowarrow.png";
import { NavLink } from "react-router-dom";

const Contact = () => {
  return (
    <div className="contact" id="contact">
      <div className="contact__wrapper">
        <div className="contact__header">
          <div className="contact__linkdiv">
            <img src={flower} className="contact__flower" />
            <NavLink to={"/about"} className="contact__link">
              Biz bilan aloqa
              <img src={yellowarrow} className="contact__arrow" />
            </NavLink>
          </div>
          <h1 className="contact__title">Biz bilan bog’lanish</h1>
          <p className="contact__text">
            Dizaynerlik, rassomlik, adabiyot kabi san’atning turli
            yo‘nalishlarida o‘z iste’dodimiz haqida ma'lumotlar yoritilib
            boriladi.
          </p>
        </div>
        <form className="contact__form">
          <p className="contact__label">Ismingiz</p>
          <input type="text" placeholder="Ismingiz" />
          <p className="contact__label">Telefon raqamingiz</p>
          <input type="tel" placeholder="+998" />
          <p className="contact__label">Elektron pochtaingiz</p>
          <input type="email" placeholder="Elektron pochtaingiz" />
          <p className="contact__label">Murojaat mazmuni</p>
          <textarea placeholder="Murojaatingiz haqida yozing"></textarea>
          <div>
            <input type="checkbox" id="privacy" />
            <p className="contact__privacy">
              Siz bizning do'stona maxfiylik siyosatimizga rozilik bildirasiz.
            </p>
          </div>
          <button type="submit">Yuborish</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
