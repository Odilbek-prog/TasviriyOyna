import React from "react";

const NewsCard = ({ image, title }) => (
  <div className="news-card">
    <img src={image} alt={title} />
    <h3 className="news-title">{title}</h3>
  </div>
);

export default NewsCard;
