import { ChangeEvent, Dispatch, SetStateAction } from "react";
import styles from "../styles/Menu.module.css";

type MenuProps = {
  numberOfDoors: string;
  setNumberOfDoors: Dispatch<SetStateAction<string>>;
  setIsMenuOpen: Dispatch<SetStateAction<boolean>>;
};

const Menu = ({
  setIsMenuOpen,
  setNumberOfDoors,
  numberOfDoors,
}: MenuProps) => {
  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setNumberOfDoors(target.value);
  };

  const handleStartGame = () => {
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
