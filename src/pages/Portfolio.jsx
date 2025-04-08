import React from "react";
import portfolioimg1 from "../assets/portfolio1.png";
import PaginatedPortfolio from "../components/UI/PaginatedPortfolio";

const portfoliopage = () => {
  const portfolio = Array.from({ length: 90 }, (_) => ({
    image: portfolioimg1,
    title: `Suissine uchun post dizayni`,
  }));
  return (
    <div className="portfoliopage">
      <div className="portfoliopage__wrapper">
        <div className="portfoliopage__top">
          <p className="portfoliopage__yellow">
            Bizning ishlarimiz bilan tanishing
          </p>
          <h1 className="portfoliopage__title">Bizning portfolio</h1>
          <p className="portfoliopage__text">
            O'zbekiston Respublikasida bo'lib o'tayotgan tadbirlar uchun
            "Tasviriy oyina" ijodiy uyushmasi tomonidan bajarilgan ishlar
            namunasi.
          </p>
        </div>
        <PaginatedPortfolio news={portfolio} itemsPerPage={9} />
      </div>
    </div>
  );
};

export default portfoliopage;
