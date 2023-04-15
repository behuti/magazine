import React from "react";
import styles from "./hero.module.scss";

const Hero = ({imgSrc, imgDesc}) => {
  const { Hero } = styles;

  return (
    <section className={Hero}>
      <img src={imgSrc} alt={imgDesc} />
    </section>
  );
};

export default Hero;
