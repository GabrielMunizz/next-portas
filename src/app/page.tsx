"use client";

import { useState } from "react";
import Door from "../../components/Door";
import styles from "../../styles/Home.module.css";
import Menu from "../../components/Menu";

export default function Home() {
  const [numberOfDoors, setNumberOfDoors] = useState("1");
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  const createArray = (num: number) => {
    return Array.from({ length: num }, (_, index) => index + 1);
  };

  const doors = createArray(Number(numberOfDoors));
  return (
    <main className={styles.main}>
      <h1>Projeto Portas</h1>
      <div className={styles.doorsContent}>
        {doors.map((doorNumber) => (
          <Door key={doorNumber} doorNumber={doorNumber} />
        ))}
      </div>
      {isMenuOpen && (
        <Menu
          numberOfDoors={numberOfDoors}
          setNumberOfDoors={setNumberOfDoors}
          setIsMenuOpen={setIsMenuOpen}
        />
      )}
    </main>
  );
}
