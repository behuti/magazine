import PropTypes from "prop-types";
import styles from "./featuredArticle.module.scss";

const FeaturedArticle = ({
  imgSource,
  photoDesc,
  articleTitle,
  articleDate,
  articleTag,
}) => {
  const {
    FeaturedArticle,
    FeaturedArticleThumbnail,
    FeaturedArticleMetaData,
    FeaturedArticleTag,
    FeaturedArticleDate,
    FeaturedArticleTitle
  } = styles;

  return (
    <article className={FeaturedArticle}>
      <figure className={FeaturedArticleThumbnail}>
        <img src={imgSource} alt={photoDesc} />
      </figure>
      <div>
        <div className={FeaturedArticleMetaData}>
          <span className={FeaturedArticleTag}>{articleTag}</span>
          <span className={FeaturedArticleDate}>{articleDate}</span>
        </div>
        <h3 className={FeaturedArticleTitle}>{articleTitle}</h3>
      </div>
    </article>
  );
};

FeaturedArticle.propTypes = {
  imgSource: PropTypes.string,
  photoDesc: PropTypes.string,
  articleTitle: PropTypes.string,
  articleTag: PropTypes.string,
  articleDate: PropTypes.string,
};

export default FeaturedArticle;
