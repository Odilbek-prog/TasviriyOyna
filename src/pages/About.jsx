import React from "react";
import avatar from "../assets/about1.png";
import avatar2 from "../assets/about2.png";
import Contents from "../assets/Contents.png";

const About = () => {
  const teamMembers = [
    {
      image: avatar,
      name: "URAZBAEV DARMENBEK",
      role: "QOROOQOLPOGGISTON RESPUBLIKASI RAISI",
    },
    {
      image: avatar,
      name: "Mamarasulov Akrom",
      role: "ANDIJON VILOYATI RAISI",
    },
    {
      image: avatar,
      name: "toshpulatov jo'rabek",
      role: "BUXORO VILOYATI RAISI",
    },
    { image: avatar, name: "Maxmudov Dilmurod", role: "NAVOIY VILOYATI RAISI" },
    {
      image: avatar,
      name: "mamadjonov Dilshod",
      role: "NAMANGAN VILOYATI RAISI",
    },
    {
      image: avatar,
      name: "xalimov Iskandar",
      role: "SAMARQAND VILOYATI RAISI",
    },
    {
      image: avatar,
      name: "Yunusov Hakimjon",
      role: "SIRDARYO VILOYATI RAISI",
    },
    {
      image: avatar2,
      name: "Xolmirzaeva Feruza",
      role: "surxondaryo VILOYATI RAISI",
    },
    {
      image: avatar,
      name: "Gulyamov Murod",
      role: "TOSHKENT VILOYATI RAISI",
    },
    {
      image: avatar,
      name: "Saidtajiev Azamat",
      role: "FARG’ONA VILOYATI RAISI",
    },
    {
      image: avatar,
      name: "karimov dilshod",
      role: "QASHQADARYO VILOYATI RAISI",
    },
    {
      image: avatar,
      name: "komilov shoxrux",
      role: "xorazim VILOYATI RAISI",
    },
  ];
  return (
    <div className="aboutpage">
      <div className="aboutpage__wrapper">
        <div className="aboutpage__top">
          <p className="aboutpage__yellow">
            Professional jamoa bilan tanishing
          </p>
          <h1 className="aboutpage__title">Biz haqimizda</h1>
          <p className="aboutpage__text">
            Ko'p yillik tajribaga ega bo'lgan jamoa. Biz - targ'ibot-tashviqot
            yetakchilarimiz.
          </p>
        </div>
        <div className="aboutpage__cards">
          {teamMembers.map((item) => (
            <div className="aboutpage__card">
              <img src={item.image} className="aboutpage__img" />
              <h3 className="aboutpage__cardtitle">{item.name}</h3>
              <p className="aboutpage__cardtext">{item.role}</p>
            </div>
          ))}
        </div>
        <div className="aboutpage__contents">
          <div className="aboutpage__content">
            <p className="aboutpage__yellow">Get to know us</p>
            <h1 className="aboutpage__lasttitle">Biz haqimizda</h1>
            <p className="aboutpage__lasttext">
              Ko'p yillik tajribaga ega bo'lgan jamoa. Biz - targ'ibot-tashviqot
              yetakchilarimiz.
            </p>
            <p className="aboutpage__lasttext">
              Tasviriy oyina bu - 28-yillik tajribaga ega bilimli insonlardan
              tashkil topgan jamoa. Targ'ibotning poydevori biz bilan boshlang.
            </p>
          </div>
          <img src={Contents} className="aboutpage__contentimg" />
        </div>
      </div>
    </div>
  );
};

export default About;
