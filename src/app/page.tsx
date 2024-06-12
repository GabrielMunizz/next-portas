"use client";

import Door from "../../components/Door";
import { DoorModel } from "../../model/DoorModel";
import styles from "../../styles/Home.module.css";

export default function Home() {
  const p1 = new DoorModel(1);
  const p2 = new DoorModel(2);
  return (
    <main className={styles.main}>
      <h1>Projeto Portas</h1>
      <div className={styles.doorsContent}>
        <Door door={p1} />
        <Door door={p2} />
      </div>
    </main>
  );
}
