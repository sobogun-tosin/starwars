import React from "react";
import "./Banner.scss";
import banner from "../../images/banner.jpg";
import Features from "../features/Features";

const Banner = () => {
  return (
    <section className="section-container">
      <img src={banner} alt="banner" />
      <div className="movie-container">
        <Features />
      </div>
    </section>
  );
};

export default Banner;
