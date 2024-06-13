"use client";
import style from "../styles/Door.module.css";
import useDoor from "../hooks/useDoor";

type DoorProps = {
  doorNumber: number;
};

const Door = ({ doorNumber }: DoorProps) => {
  const { doorState, dispatch } = useDoor(doorNumber);

  const selected = doorState.isSelected ? style.selected : "";

  const handleSelected = () => {
    dispatch({ type: "SELECT_DOOR" });
  };

  const handleOpenDoor = () => {
    dispatch({ type: "OPEN_DOOR" });
  };

  return (
    <div className={style.door}>
      <div onClick={handleSelected} className={`${style.front} ${selected}`}>
        <div className={style.number}>{doorState.isOpen ? "" : doorNumber}</div>
        <div className={style.knob} onClick={handleOpenDoor} />
      </div>
      <div className={style.floor} />
    </div>
  );
};

export default Door;
