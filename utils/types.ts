export type Door = {
  doorNumber: number;
  isSelected: boolean;
  isOpen: boolean;
  haveGift: boolean;
};

export type DoorAction =
  | { type: "SELECT_DOOR"; payload: boolean }
  | { type: "OPEN_DOOR"; payload: boolean }
  | { type: "HAVE_GIFT"; payload: boolean };
