export type Door = {
  doorNumber: number;
  isSelected: boolean;
  isOpen: boolean;
  haveGift: boolean;
};

export type DoorAction =
  | { type: "SELECT_DOOR" }
  | { type: "OPEN_DOOR" }
  | { type: "HAVE_GIFT" };
