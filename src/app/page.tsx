"use client";

import { useState } from "react";
import Door from "../../components/Door";
import styles from "../../styles/Home.module.css";
import Menu from "../../components/Menu";

export default function Home() {
  const [numberOfDoors, setNumberOfDoors] = useState("3");
  const [selectedNumber, setSelectedNumber] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const haveGift = Math.floor(Math.random() * selectedNumber + 1);

  const createArray = (num: number) => {
    return Array.from({ length: num }, (_, index) => index + 1);
  };

  const doors = createArray(selectedNumber);
  return (
    <main className={styles.main}>
      <h1>Projeto Portas</h1>
      <div className={styles.doorsContent}>
        {doors.map((doorNumber) => (
          <Door key={doorNumber} doorNumber={doorNumber} haveGift={haveGift} />
        ))}
      </div>
      {isMenuOpen && (
        <Menu
          numberOfDoors={numberOfDoors}
          setNumberOfDoors={setNumberOfDoors}
          setIsMenuOpen={setIsMenuOpen}
          setSelectedNumber={setSelectedNumber}
        />
      )}
    </main>
  );
}
