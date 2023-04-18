import React from "react";
import styles from "./contentTable.module.scss";
import FeaturedArticle from "../featuredArticle/featuredArticle";

type Props = {
  sectionId: string;
}

const ContentTable = ({ sectionId }: Props) => {
  const { ContentTable, ContentTableContainer, ContentTableTitle } = styles;

  return (
    <section id={sectionId} className={ContentTable}>
      <div className={ContentTableContainer}>
        <h2 className={ContentTableTitle}>Trending on EH</h2>
        <nav>
          <FeaturedArticle
            imgSource={"img/featured-article.jpg"}
            photoDesc="featured article"
            articleDate="Apr 09, 2023"
            articleTag="Fashion"
            articleTitle="Ariana Martinez | A new enterprise model has been born for empowered women embracing their feminity."
          />
        </nav>
      </div>
    </section>
  );
};

export default ContentTable;
