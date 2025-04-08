import React from "react";
import Intro from "../components/UI/Intro/Intro";
import About from "../components/UI/About/About";
import Portfolio from "../components/UI/Portfolio/Portfolio";
import Serv from "../components/UI/Serv/Serv";
import Review from "../components/UI/Review/Review";
import Faq from "../components/UI/Faq/Faq";
import Contact from "../components/UI/Contact/Contact";
import Team from "../components/UI/Team/Team";

const Home = () => {
  return (
    <div className="home">
      <Intro />
      <About />
      <Portfolio />
      <Serv />
      <Review />
      <Faq />
      <Contact />
      <Team />
    </div>
  );
};

export default Home;
