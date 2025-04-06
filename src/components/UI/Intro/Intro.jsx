import React from "react";
import "./Intro.scss";
import flower from "../../../assets/flower.png";
import intro1 from "../../../assets/intro1.png";
import intro2 from "../../../assets/intro2.png";
import intro3 from "../../../assets/intro3.png";
import intro4 from "../../../assets/intro4.png";
import intro5 from "../../../assets/intro5.png";
import yellowarrow from "../../../assets/yellowarrow.png";
import { NavLink } from "react-router-dom";

const Intro = () => {
  return (
    <div className="intro">
      <div className="intro__wrapper">
        <div className="intro__top">
          <div className="intro__linkdiv">
            <img src={flower} className="intro__flower" />
            <NavLink to={"/about"} className="intro__link">
              Bizning shiyor
              <img src={yellowarrow} className="intro__arrow" />
            </NavLink>
          </div>
          <div className="intro__titles">
            <h1 className="intro__title">Targ'ibotchi </h1>
            <h1 className="intro__titlegray">
              bu -aniq va to'g'ri ma'lumotni manfaatsiz{" "}
            </h1>
            <h1 className="intro__title">ulashuvchi inson</h1>
          </div>
          <p className="intro__text">
            O'zbekiston Respublikasi "Tasviriy oyina" ijodiy uyishmasi
            O'zbekiston Respublikasi Prezident tomonidan chiqarilgan qaror va
            qonunlarning targ'ibot-tashviqot ishlari bilan shug'ullanadi.
          </p>
          <NavLink to={"/about"} className="intro__btn">
            Ko’proq bilish
          </NavLink>
        </div>
        <div className="intro__bottom">
          <p className="intro__subtitle">Kompaniyalar va tashkilotlar</p>
          <div className="intro__companies">
            <img src={intro1} className="intro__company" />
            <img src={intro2} className="intro__company" />
            <img src={intro3} className="intro__company" />
            <img src={intro4} className="intro__company" />
            <img src={intro5} className="intro__company" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
