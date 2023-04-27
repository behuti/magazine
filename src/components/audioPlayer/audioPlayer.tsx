import React from "react";
import styles from "./audioPlayer.module.scss";

type Props = {
  audioSrc: string;
};

const AudioPlayer = ({ audioSrc }: Props) => {
  const { AudioContainer } = styles;

  return (
    <section className={AudioContainer}>
      <audio src={audioSrc} controls data-testid="audio-player"></audio>
    </section>
  );
};

export default AudioPlayer;
