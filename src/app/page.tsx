import Door from "../../components/Door";
import styles from "../../styles/Home.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Projeto Portas</h1>
      <div className={styles.doorsContent}>
        <Door number={3} />
        <Door number={3} />
      </div>
    </main>
  );
}
