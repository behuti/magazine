import React from "react";
import styles from "./article.module.scss";

const Article = ({ mainTitle, children }) => {
  const { ArticleContainer, ArticleTitle } = styles;
  return (
    <div className={ArticleContainer}>
      <h1 className={ArticleTitle}>{mainTitle}</h1>
      {children}
    </div>
  );
};

export default Article;
