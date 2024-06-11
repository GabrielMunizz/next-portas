"use client";
import { useState } from "react";
import style from "../styles/Door.module.css";

type DoorProps = {
  number: number;
};

const Door = ({ number }: DoorProps) => {
  const [isSelected, setIsSelected] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const selected = isSelected ? style.selected : "";

  const handleSelected = () => {
    setIsSelected((prev) => !prev);
  };

  return (
    <div className={style.door}>
      <div onClick={handleSelected} className={`${style.front} ${selected}`}>
        <div className={style.number}>{isOpen ? "" : number}</div>
        <div className={style.knob}></div>
      </div>
      <div className={style.floor} />
    </div>
  );
};

export default Door;
