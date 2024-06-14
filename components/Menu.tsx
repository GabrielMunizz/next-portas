import { ChangeEvent, Dispatch, SetStateAction } from "react";
import styles from "../styles/Menu.module.css";

type MenuProps = {
  numberOfDoors: string;
  setNumberOfDoors: Dispatch<SetStateAction<string>>;
  setIsMenuOpen: Dispatch<SetStateAction<boolean>>;
  setSelectedNumber: Dispatch<SetStateAction<number>>;
};

const Menu = ({
  setIsMenuOpen,
  setNumberOfDoors,
  setSelectedNumber,
  numberOfDoors,
}: MenuProps) => {
  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setNumberOfDoors(target.value);
  };

  const handleStartGame = () => {
    setIsMenuOpen(false);
    setSelectedNumber(+numberOfDoors);
  };
  return (
    <div className={styles.menuContainer}>
      <div className={styles.menu}>
        <div className={`${styles.display} ${styles.title}`}>
          <h2>Monty Hall Game</h2>
        </div>
        <div className={`${styles.display} ${styles.selectNumber}`}>
          <h3>Select number of doors</h3>
          <input type="text" value={numberOfDoors} onChange={handleChange} />
        </div>
        <div className={`${styles.display} ${styles.filler}`}></div>
        <div className={`${styles.display} ${styles.start}`}>
          <button onClick={handleStartGame}>Start Game</button>
        </div>
      </div>
    </div>
  );
};

export default Menu;
