import React from "react";
import "./Serv.scss";
import serv1 from "../../../assets/serv1.png";
import serv2 from "../../../assets/serv2.png";
import serv3 from "../../../assets/serv3.png";
import serv4 from "../../../assets/serv4.png";
import serv5 from "../../../assets/serv5.png";
import serv6 from "../../../assets/serv6.png";
import { NavLink } from "react-router-dom";
import flower from "../../../assets/flower.png";
import yellowarrow from "../../../assets/yellowarrow.png";

const Serv = () => {
  return (
    <div className="serv">
      <div className="serv__wrapper">
        <div className="serv__top">
          <div className="serv__linkdiv">
            <img src={flower} className="serv__flower" />
            <NavLink to={"/about"} className="serv__link">
              Bizning hizmatlarimiz
              <img src={yellowarrow} className="serv__arrow" />
            </NavLink>
          </div>
          <h1 className="serv__title">Hizmatlarimiz</h1>
          <p className="serv__text">
            Dizaynerlik, rassomlik, adabiyot kabi san’atning turli
            yo‘nalishlarida o‘z iste’dodimiz haqida ma'lumotlar yoritilib
            boriladi.
          </p>
        </div>
        <div className="serv__cards">
          <div className="serv__card">
            <img src={serv1} className="serv__icon" />
            <h3 className="serv__cardtitle">Banner dizayni</h3>
          </div>
          <div className="serv__card">
            <img src={serv2} className="serv__icon" />
            <h3 className="serv__cardtitle">Tadbirlar</h3>
          </div>
          <div className="serv__card">
            <img src={serv3} className="serv__icon" />
            <h3 className="serv__cardtitle">Brend va reklama</h3>
          </div>
          <div className="serv__card">
            <img src={serv4} className="serv__icon" />
            <h3 className="serv__cardtitle">Shiyorlar dizayni</h3>
          </div>
          <div className="serv__card">
            <img src={serv5} className="serv__icon" />
            <h3 className="serv__cardtitle">Tavsiyanomalar</h3>
          </div>
          <div className="serv__card">
            <img src={serv6} className="serv__icon" />
            <h3 className="serv__cardtitle">Led reklamasi</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Serv;
