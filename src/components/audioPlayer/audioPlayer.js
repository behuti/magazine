import React from "react";
import styles from "./audioPlayer.module.scss";

const AudioPlayer = ({ audioSrc }) => {
  const { AudioContainer } = styles;

  return (
    <section className={AudioContainer}>
      <audio src={audioSrc} controls></audio>
    </section>
  );
};

export default AudioPlayer;
