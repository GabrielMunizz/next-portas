import { Dispatch, SetStateAction } from "react";
import styles from "../styles/Menu.module.css";

type MenuProps = {
  numberOfDoors: number;
  setNumberOfDoors: Dispatch<SetStateAction<number>>;
  setIsMenuOpen: Dispatch<SetStateAction<boolean>>;
  setSelectedNumber: Dispatch<SetStateAction<number>>;
  setHaveGift: Dispatch<SetStateAction<number>>;
};

const Menu = ({
  setIsMenuOpen,
  setNumberOfDoors,
  setSelectedNumber,
  setHaveGift,
  numberOfDoors,
}: MenuProps) => {
  const handleIncrement = () => {
    setNumberOfDoors((prev) => (prev < 15 ? prev + 1 : 15));
  };

  const handleDecrement = () => {
    setNumberOfDoors((prev) => (prev > 3 ? prev - 1 : 3));
  };

  const handleStartGame = () => {
    const random = Math.floor(Math.random() * numberOfDoors + 1);
    setHaveGift(random);
    setSelectedNumber(numberOfDoors);
    setIsMenuOpen(false);
  };
  return (
    <div className={styles.menuContainer}>
      <div className={styles.menu}>
        <div className={`${styles.display} ${styles.title}`}>
          <h2>Monty Hall Game</h2>
        </div>
        <div className={`${styles.display} ${styles.selectNumber}`}>
          <h3>Select number of doors</h3>
          <h2>{numberOfDoors}</h2>
          <div className={styles.buttonContainer}>
            <button onClick={handleDecrement}>-</button>
            <button onClick={handleIncrement}>+</button>
          </div>
        </div>
        <div className={`${styles.display} ${styles.filler}`} />
        <div
          onClick={handleStartGame}
          className={`${styles.display} ${styles.start}`}
        >
          <h2>Start</h2>
        </div>
      </div>
    </div>
  );
};

export default Menu;
