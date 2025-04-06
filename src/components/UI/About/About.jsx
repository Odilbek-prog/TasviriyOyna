import React from "react";
import yellowarrow from "../../../assets/yellowarrow.png";
import flower from "../../../assets/flower.png";
import avatar from "../../../assets/avatar.png";
import { NavLink } from "react-router-dom";
import "./About.scss";

const About = () => {
  return (
    <div className="about">
      <div className="about__wrapper">
        <div className="about__desc">
          <div className="about__linkdiv">
            <img src={flower} className="about__flower" />
            <NavLink to={"/about"} className="about__link">
              Qisqacha, biz haqimizda...
              <img src={yellowarrow} className="about__arrow" />
            </NavLink>
          </div>
          <h1 className="about__title">Biz haqimizda</h1>
          <p className="about__text">
            Dizaynerlik, rassomlik, adabiyot kabi san’atning turli
            yo‘nalishlarida o‘z iste’dodimiz haqida ma'lumotlar yoritilib
            boriladi.
          </p>
        </div>
        <div className="about__middle">
          <div className="about__left">
            <img src={avatar} className="about__avatar" />
            <div>
              <h3 className="about__name">Isfandiyor latipov Xudoyorovich</h3>
              <p className="about__who">
                Tasviriy oyina ijodiy uyishmasi Boshqaruvi raisi
              </p>
            </div>
          </div>
          <div className="about__right">
            <h1 className="about__subtitle">
              Tasviriy oyina ijodiy uyishmasi - bu aniq bir maqsad, g'oya
              yo'lida{" "}
            </h1>
            <h1 className="about__subtitlegray">
              ekanligimizni targ'ib qiluvchi davlat va halq o'rtasidagi g'oyani
              birlashtiruvchi targ'ibotchilardir
            </h1>
          </div>
        </div>
        <div className="about__bottom">
          <div className="about__card1">
            <span className="about__order">/ 01</span>
            <div className="about__carddesc">
              <h2 className="about__cardtitle">+1000</h2>
              <p className="about__cardtext">
                dan ortiq mijozlar bizning hizmatlarimizni barchaga tavsiya
                etadilar!
              </p>
            </div>
          </div>
          <div className="about__card2">
            <span className="about__order">/ 02</span>
            <div className="about__carddesc">
              <h2 className="about__cardtitle">+300</h2>
              <p className="about__cardtext">
                dan ortiq doimiy mijozlar bizga ishonch bildiradi va
                xizmatlarimizdan muntazam foydalanadi!
              </p>
            </div>
          </div>
          <div className="about__card3">
            <span className="about__order">/ 03</span>
            <div className="about__carddesc">
              <h2 className="about__cardtitle">1997</h2>
              <p className="about__cardtext">
                Biz 28 yildan beri uzluksiz xizmat ko‘rsatib, mijozlar
                ishonchini qozonib kelmoqdamiz!
              </p>
            </div>
          </div>
          <div className="about__card4">
            <span className="about__order">/ 04</span>
            <div className="about__carddesc">
              <h2 className="about__cardtitle">+200</h2>
              <p className="about__cardtext">
                dan ortiq mamnun mijozlar bizning hizmatlarimizdan doimiy
                foydalanadilar, xursand bo’ladilar hamda ishonch bilan tavsiya
                qila oladilar
              </p>
            </div>
          </div>
          <div className="about__card5">
            <span className="about__order">/ 05</span>
            <div className="about__carddesc">
              <h2 className="about__cardtitle">+1500</h2>
              <p className="about__cardtext">
                dan ortiq muvaffaqiyatli loyihalarni amalga oshirib, har bir
                mijozimizning ehtiyojlariga mos innovatsion yechimlar yaratib
                kelmoqdamiz.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
