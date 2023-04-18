import styles from "./brutalistHeader.module.scss";

const BrutalistHeader = ({ sectionId, title, children }) => {
  const {
    BrutalistHeader,
    BrutalistHeaderContainer,
    BrutalistHeaderTitle,
    BrutalistHeaderContent,
  } = styles;

  return (
    <section id={sectionId} className={BrutalistHeader}>
      <div className={BrutalistHeaderContainer}>
        <h1 className={BrutalistHeaderTitle}>EH - Virtual Magazine</h1>
        <div className={BrutalistHeaderContent}>{children}</div>
      </div>
    </section>
  );
};
export default BrutalistHeader;
