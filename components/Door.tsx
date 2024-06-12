"use client";
import style from "../styles/Door.module.css";
import { DoorModel } from "../model/DoorModel";

type DoorProps = {
  door: DoorModel;
};

const Door = ({ door }: DoorProps) => {
  const selected = door.getIsSelected() ? style.selected : "";

  const handleSelected = () => {
    door.alterIsSelected();
  };

  return (
    <div className={style.door}>
      <div onClick={handleSelected} className={`${style.front} ${selected}`}>
        <div className={style.number}>
          {door.getIsOpen() ? "" : door.getNumber()}
        </div>
        <div className={style.knob}></div>
      </div>
      <div className={style.floor} />
    </div>
  );
};

export default Door;
