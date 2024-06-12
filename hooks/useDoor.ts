import { Door, DoorAction } from "../utils/types";
import { useReducer } from "react";

const useDoor = (doorNumber: number) => {
  const initialState: Door = {
    doorNumber,
    isSelected: false,
    isOpen: false,
    haveGift: false,
  };

  const doorReducer = (state = initialState, action: DoorAction): Door => {
    switch (action.type) {
      case "SELECT_DOOR":
        return {
          ...state,
          isSelected: action.payload,
        };
      case "OPEN_DOOR":
        return {
          ...state,
          isOpen: action.payload,
        };
      case "HAVE_GIFT":
        return {
          ...state,
          haveGift: action.payload,
        };
      default:
        return state;
    }
  };
  const [doorState, dispatch] = useReducer(doorReducer, initialState);

  return {
    doorState,
    dispatch,
  };
};

export default useDoor;
