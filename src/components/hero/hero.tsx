import React from "react";
import styles from "./hero.module.scss";

type Props = {
  imgSrc: string;
  imgDesc: string;
}

const Hero = ({imgSrc, imgDesc}: Props) => {
  const { Hero } = styles;

  return (
    <section className={Hero}>
      <img src={imgSrc} alt={imgDesc} />
    </section>
  );
};

export default Hero;
