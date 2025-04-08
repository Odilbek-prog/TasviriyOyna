import React from "react";

const NewsCard = ({ image, date, title, desc }) => (
  <div className="news-card">
    <img src={image} alt={title} />
    <div className="news-content">
      <p className="news-date">{date}</p>
      <h3 className="news-title">{title}</h3>
      <p className="news-desc">{desc}</p>
    </div>
    <div className="news-new">
      <p>•</p>
      <p>Yangilik yo’nalishi</p>
    </div>
  </div>
);

export default NewsCard;
