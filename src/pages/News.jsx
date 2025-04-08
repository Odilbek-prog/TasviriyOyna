import React from "react";
import newsimg from "../assets/news.png";
import PaginatedNews from "../components/UI/PaginatedNews";

const News = () => {
  const news = Array.from({ length: 60 }, (_, index) => ({
    image: newsimg,
    date: "22.12.2025",
    title: `UX review presentations ${index + 1}`,
    desc: "How do you create compelling presentations that wow your colleagues and impress your managers?",
  }));
  return (
    <div className="news">
      <div className="news__wrapper">
        <div className="news__top">
          <p className="news__yellow">Yangiliklar bilan tanishing</p>
          <h1 className="news__title">Bizning yangiliklar</h1>
          <p className="news__text">
            Yangiliklarimizdan doimo xabardor bo’lmoqchimisz? Unda bizga
            elektron pochtangizni qoldiring va biz yangiliklar haqida xabar
            beramiz
          </p>
          <form className="news__form">
            <input
              type="email"
              className="news__input"
              placeholder="Emailingizni kiriting"
            />
            <button className="news__btn">Yuborish</button>
          </form>
        </div>
        <PaginatedNews news={news} itemsPerPage={6} />
      </div>
    </div>
  );
};

export default News;
