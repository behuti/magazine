import React from "react";
import { Link } from "react-router-dom";
import styles from "./featuredArticle.module.scss";

type Props = {
  imgSource: string;
  photoDesc: string;
  articleTitle: string;
  articleDate: string;
  articleTag: string;
};

const FeaturedArticle = ({
  imgSource,
  photoDesc,
  articleTitle,
  articleDate,
  articleTag,
}: Props) => {
  const {
    FeaturedArticle,
    FeaturedArticleThumbnail,
    FeaturedArticleMetaData,
    FeaturedArticleTag,
    FeaturedArticleDate,
    FeaturedArticleTitle,
  } = styles;

  return (
    <article className={FeaturedArticle} data-testid="featured-article">
      <figure className={FeaturedArticleThumbnail}>
        <img src={imgSource} alt={photoDesc} data-testid="featured-article-img"/>
      </figure>
      <div>
        <div className={FeaturedArticleMetaData}>
          <span className={FeaturedArticleTag}>{articleTag}</span>
          <span className={FeaturedArticleDate}>{articleDate}</span>
        </div>
        <Link to={"/fashion"} className={FeaturedArticleTitle}>
          {articleTitle}
        </Link>
      </div>
    </article>
  );
};

export default FeaturedArticle;
