import React from "react";
import flower from "../../../assets/flower.png";
import yellowarrow from "../../../assets/yellowarrow.png";
import portfolio1 from "../../../assets/portfolio1.png";
import portfolio2 from "../../../assets/portfolio2.png";
import "./Portfolio.scss";
import { NavLink } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper/modules";

const Portfolio = () => {
  return (
    <div className="portfolio">
      <div className="portfolio__top">
        <div className="portfolio__linkdiv">
          <img src={flower} className="portfolio__flower" />
          <NavLink to={"/portfolio"} className="portfolio__link">
            Ajoyib keyslarimiz
            <img src={yellowarrow} className="portfolio__arrow" />
          </NavLink>
        </div>
        <h1 className="portfolio__title">Bizning portfoliomiz</h1>
        <p className="portfolio__text">
          Dizaynerlik, rassomlik, adabiyot kabi san’atning turli yo‘nalishlarida
          o‘z iste’dodimiz haqida ma'lumotlar yoritilib boriladi.
        </p>
      </div>
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={40}
        freeMode={true}
        loop={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="portfolio__cards"
      >
        <SwiperSlide className="portfolio__card">
          <img src={portfolio1} className="portfolio__img" />
          <p className="portfolio__cardtext">Suissine uchun post dizayni</p>
        </SwiperSlide>
        <SwiperSlide className="portfolio__card">
          <img src={portfolio1} className="portfolio__img" />
          <p className="portfolio__cardtext">Suissine uchun post dizayni</p>
        </SwiperSlide>
        <SwiperSlide className="portfolio__card">
          <img src={portfolio2} className="portfolio__img" />
          <p className="portfolio__cardtext">Suissine uchun post dizayni</p>
        </SwiperSlide>
        <SwiperSlide className="portfolio__card">
          <img src={portfolio2} className="portfolio__img" />
          <p className="portfolio__cardtext">Suissine uchun post dizayni</p>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
