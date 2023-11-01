import { SET_MENU_OPEN, SetMenuOpenActions } from "./setMenuOpenActions";

export default function setMenuOpenReducer(
  state: boolean = false,
  action: SetMenuOpenActions
): boolean {
  switch (action.type) {
    case SET_MENU_OPEN: {
      return action.payload;
    }
    default:
      break;
  }
  return state;
}
