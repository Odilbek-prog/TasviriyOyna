import React, { useState } from "react";
import "./FAQ.scss";
import { NavLink } from "react-router-dom";
import flower from "../../../assets/flower.png";
import yellowarrow from "../../../assets/yellowarrow.png";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqData = [
    {
      question: "O‘zbekistonda qancha vaqt davomida tayyorlanadi?",
      answer:
        "Dizaynerlar, rassomlik, adabiyot kabi sanʼatlar turi yo‘nalishlarida o‘z isteʼdodimiz haqida maʼlumotlar yoritib boriladi.",
    },
    {
      question: "Tasviriy Oyna nima?",
      answer:
        "Tasviriy Oyna - bu sanʼat va dizayn bilan bog‘liq loyiha bo‘lib, unda turli xil ijodiy ishlar namoyish etiladi.",
    },
    {
      question: "Buyurtma berish tartibi qanday?",
      answer:
        "Buyurtma berish uchun saytimizdagi maxsus formani to‘ldirishingiz kerak bo‘ladi.",
    },
    {
      question: "‘Tasviriy oyna’da ishlash uchun qanday talablar mavjud?",
      answer:
        "Biz bilan ishlash uchun ijodiy qobiliyat va tajribaga ega bo‘lishingiz kerak.",
    },
  ];

  const toggleFAQ = (index) => {
    console.log("Bosilgan indeks:", index); // Konsolda indeksni ko‘rish
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq">
      <div className="faq__wrapper">
        <div className="faq__linkdiv">
          <img src={flower} className="faq__flower" />
          <NavLink to={"/about"} className="faq__link">
            FAQ
            <img src={yellowarrow} className="faq__arrow" />
          </NavLink>
        </div>
        <h2 className="faq__title">Ko‘p beriladigan savollar</h2>
        <p className="faq__description">
          Dizaynerlar, rassomlik, adabiyot kabi sanʼatlar turi yo‘nalishlarida
          o‘z isteʼdodimiz haqida maʼlumotlar yoritib boriladi.
        </p>
        <div className="faq__list">
          {faqData.map((item, index) => (
            <div
              key={index}
              className={`faq__item ${activeIndex === index ? "active" : ""}`}
              onClick={() => toggleFAQ(index)}
            >
              <div className="faq__question">
                <span className="faq__number">0{index + 1}</span>
                <p>{item.question}</p>
                <span className="faq__icon">
                  {activeIndex === index ? "−" : "+"}
                </span>
              </div>
              <div className="faq__answer">
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
