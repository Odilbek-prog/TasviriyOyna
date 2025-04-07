import React from "react";
import "./Review.scss";
import { NavLink } from "react-router-dom";
import flower from "../../../assets/flower.png";
import yellowarrow from "../../../assets/yellowarrow.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper/modules";
import man from "../../../assets/man.jpeg";

const Review = () => {
  return (
    <div className="review">
      <div className="review__wrapper">
        <div className="review__top">
          <div className="review__linkdiv">
            <img src={flower} className="review__flower" />
            <NavLink to={"/about"} className="review__link">
              Biz haqimizda
              <img src={yellowarrow} className="review__arrow" />
            </NavLink>
          </div>
          <h1 className="review__title">
            Bizning mijozlarimiz biz haqimizda...
          </h1>
          <p className="review__text">
            Dizaynerlik, rassomlik, adabiyot kabi san’atning turli
            yo‘nalishlarida o‘z iste’dodimiz haqida ma'lumotlar yoritilib
            boriladi.
          </p>
        </div>
        <Swiper
          effect={"cards"}
          grabCursor={true}
          loop={true}
          modules={[EffectCards]}
          className="review__cards"
        >
          <SwiperSlide className="review__card">
            <img src={man} className="review__img" />
            <div className="review__desc">
              <h3 className="review__cardtext">
                Dizaynerlik, rassomlik, adabiyot kabi san’atning turli
                yo‘nalishlarida o‘z iste’dodimiz haqida ma'lumotlar yoritilib
                boriladi.
              </h3>
              <hr />
              <div>
                <h4>Isfandiyor latipov Xudoyorovich</h4>
                <p>Tasviriy oyina ijodiy uyishmasi Boshqaruvi raisi</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="review__card">
            <img src={man} className="review__img" />
            <div className="review__desc">
              <p className="review__cardtext">
                Dizaynerlik, rassomlik, adabiyot kabi san’atning turli
                yo‘nalishlarida o‘z iste’dodimiz haqida ma'lumotlar yoritilib
                boriladi.
              </p>
              <div className="review__div">
                <hr />
                <div>
                  <h4>Isfandiyor latipov Xudoyorovich</h4>
                  <p>Tasviriy oyina ijodiy uyishmasi Boshqaruvi raisi</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="review__card">
            <img src={man} className="review__img" />
            <div className="review__desc">
              <p className="review__cardtext">
                Dizaynerlik, rassomlik, adabiyot kabi san’atning turli
                yo‘nalishlarida o‘z iste’dodimiz haqida ma'lumotlar yoritilib
                boriladi.
              </p>
              <div className="review__div">
                <hr />
                <div>
                  <h4>Isfandiyor latipov Xudoyorovich</h4>
                  <p>Tasviriy oyina ijodiy uyishmasi Boshqaruvi raisi</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Review;
