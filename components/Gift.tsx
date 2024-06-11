import styles from "../styles/Gift.module.css";

const Gift = () => {
  return (
    <div className={styles.gift}>
      <div className={styles.cover}></div>
      <div className={styles.body}></div>
      <div className={styles.bow1}></div>
      <div className={styles.bow2}></div>
    </div>
  );
};

export default Gift;
