import React from "react";
import NewsCard from "./NewsCard";

const NewsList = ({ currentNews }) => (
  <div className="news-list">
    {currentNews.map((newsItem, index) => (
      <NewsCard
        key={index}
        image={newsItem.image}
        date={newsItem.date}
        title={newsItem.title}
        desc={newsItem.desc}
      />
    ))}
  </div>
);

export default NewsList;
