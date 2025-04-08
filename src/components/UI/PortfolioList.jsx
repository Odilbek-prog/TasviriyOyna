import React from "react";
import PortfolioCard from "./PortfolioCard";

const NewsList = ({ currentNews }) => (
  <div className="news-list">
    {currentNews.map((newsItem, index) => (
      <PortfolioCard
        key={index}
        image={newsItem.image}
        title={newsItem.title}
      />
    ))}
  </div>
);

export default NewsList;
