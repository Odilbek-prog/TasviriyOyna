import React from "react";
import "./Team.scss"; // SCSS faylini import qilamiz
import avatar from "../../../assets/avatar.png";
import avatar2 from "../../../assets/avatar2.png";
import { NavLink } from "react-router-dom";
import flower from "../../../assets/flower.png";
import yellowarrow from "../../../assets/yellowarrow.png";

// Har bir jamoa a'zosi uchun komponent
const TeamMember = ({ image, name, role }) => (
  <div className="team__member">
    <img src={image} alt={name} />
    <h3>{name}</h3>
    <p>{role}</p>
  </div>
);

// Asosiy Team komponenti
const Team = () => {
  // Jamoa a'zolari uchun namunaviy ma'lumotlar (image URL'larni haqiqiy manzillar bilan almashtiring)
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
    <div className="team">
      <div className="team__wrapper">
        <div className="team__top">
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
        <div className="team__members">
          {teamMembers.map((member, index) => (
            <TeamMember
              key={index}
              image={member.image}
              name={member.name}
              role={member.role}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
