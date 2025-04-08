import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import PortfolioList from "./PortfolioList";

const PaginatedNews = ({ news, itemsPerPage }) => {
  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + itemsPerPage;
  const currentNews = news.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(news.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % news.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      <PortfolioList currentNews={currentNews} />
      <ReactPaginate
        breakLabel="..."
        nextLabel="keyingi >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< oldingi"
        renderOnZeroPageCount={null}
        containerClassName="pagination"
        pageClassName="page-item"
        activeClassName="active"
      />
    </>
  );
};

export default PaginatedNews;
