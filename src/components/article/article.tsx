import React from "react";
import styles from "./article.module.scss";

type Props = {
  mainTitle: string;
  children: React.ReactNode;
};

const Article = ({ mainTitle, children }: Props) => {
  const { ArticleContainer, ArticleTitle } = styles;
  return (
    <div className={ArticleContainer}>
      <h1 className={ArticleTitle}>{mainTitle}</h1>
      {children}
    </div>
  );
};

export default Article;
