import styles from "./brutalistHeader.module.scss";

const BrutalistHeader = ({ sectionId, title, children }) => {
  const {
    BrutalistHeader,
    BrutalistHeaderContainer,
    BrutalistHeaderTitle,
    BrutalistHeaderContent,
    BrutalistHeaderBackground,
    BrutalistHeaderfFader
  } = styles;

  return (
    <section id={sectionId} className={BrutalistHeader}>
      <div className={BrutalistHeaderContainer}>
        <h1 className={BrutalistHeaderTitle}>EH - Virtual Magazine</h1>
        <div className={BrutalistHeaderContent}>{children}</div>
      </div>
      <img
        className={BrutalistHeaderBackground}
        src="img/brutalist-header.jpg"
        alt="Brutalist Header background"
      />
      <div className={BrutalistHeaderfFader}></div>
    </section>
  );
};
export default BrutalistHeader;
