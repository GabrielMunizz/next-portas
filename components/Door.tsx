"use client";
import style from "../styles/Door.module.css";
import useDoor from "../hooks/useDoor";
import { useEffect } from "react";
import Gift from "./Gift";

type DoorProps = {
  doorNumber: number;
  haveGift: number;
};

const Door = ({ doorNumber, haveGift }: DoorProps) => {
  const { doorState, dispatch } = useDoor(doorNumber);

  const selected = doorState.isSelected ? style.selected : "";

  const handleSelected = () => {
    dispatch({ type: "SELECT_DOOR" });
  };

  const handleOpenDoor = () => {
    dispatch({ type: "OPEN_DOOR" });
  };

  useEffect(() => {
    if (haveGift === +doorNumber) {
      dispatch({ type: "HAVE_GIFT" });
    }
  }, [haveGift]);

  const closedDoor = () => {
    return (
      <>
        <div onClick={handleSelected} className={style.front}>
          <div className={style.number}>{doorNumber}</div>
          <div className={style.knob} onClick={handleOpenDoor} />
        </div>
      </>
    );
  };

  const openDoor = () => {
    return (
      <>
        <div className={style.open}>{doorState.haveGift && <Gift />}</div>
      </>
    );
  };

  return (
    <div className={style.door}>
      <div className={`${style.margin} ${selected}`}>
        {doorState.isOpen ? openDoor() : closedDoor()}
      </div>
      <div className={style.floor} />
    </div>
  );
};

export default Door;
