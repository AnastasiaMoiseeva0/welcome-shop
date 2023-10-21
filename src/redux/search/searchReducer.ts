import { SET_SEARCH, SetSearchActions } from "./searchActions";

export default function setSearchReducer(
  state: string | null = null,
  action: SetSearchActions
): string | null {
  switch (action.type) {
    case SET_SEARCH: {
      return action.payload;
    }
    default:
      break;
  }
  return state;
}
