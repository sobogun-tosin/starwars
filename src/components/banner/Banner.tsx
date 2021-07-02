import React from "react";
import styles from "./Banner.module.scss";
import banner from "../../images/banner.jpg";
import Features from "../features/Features";

const Banner = () => {
  return (
    <section className={styles.banner}>
      <img src={banner} alt="banner" className={styles.banner__img} />
      <div className={styles.banner__feature}>
        <Features />
      </div>
    </section>
  );
};

export default Banner;
