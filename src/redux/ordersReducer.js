import { INCREASE_QUANTITY_ACTION, DECREASE_QUANTITY_ACTION, ADD_ORDER } from "./actions";

export default function ordersReducer(state = [], action) {
  switch (action.type) {
    case ADD_ORDER: {
      return [...state, {
        ...action.payload,
        quantity: 1,
      }];
    }
    case INCREASE_QUANTITY_ACTION:
      return state.map((card) => {
        if (card.id === action.payload.id) {
          return {
            ...card,
            quantity: card.quantity + 1,
          };
        }
        return card;
      });
    case DECREASE_QUANTITY_ACTION:
      return state.map((card) => {
        if (card.id === action.payload.id && card.quantity > 1) {
          return {
            ...card,
            quantity: card.quantity - 1,
          };
        }
        return card;
      });
    default:
      break;
  }
  return state;
}
