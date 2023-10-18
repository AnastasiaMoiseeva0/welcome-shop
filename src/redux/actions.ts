import { ICard } from "../types/ICard";
import { IOrder } from "../types/IOrder";

export const INCREASE_QUANTITY_ACTION = 'INCREASE_QUANTITY_ACTION';
export const DECREASE_QUANTITY_ACTION = 'DECREASE_QUANTITY_ACTION';
export const ADD_ORDER = 'ADD_ORDER';
export const DELETE_ORDER = 'DELETE_ORDER';

interface IncreaseQuantityAction {
    type: typeof INCREASE_QUANTITY_ACTION;
    payload: {
        id : ICard['id']
    }
}

interface DecreaseQuantityAction {
    type: typeof DECREASE_QUANTITY_ACTION;
    payload: {
        id : ICard['id']
    }
}

interface AddOrderAction {
    type: typeof ADD_ORDER;
    payload: ICard
}

interface DeleteOrderAction {
    type: typeof DELETE_ORDER;
    payload: {
        id: IOrder['id']
    }
}

export function increaseQuantityActionCreator(id : ICard['id']) : IncreaseQuantityAction {
    return {type: INCREASE_QUANTITY_ACTION, payload: {id}}
}

export function decreaseQuantityActionCreator(id : ICard['id']) : DecreaseQuantityAction{
    return {type: DECREASE_QUANTITY_ACTION, payload: {id}}
} 

export function addOrderActionCreator(card: ICard) : AddOrderAction {
    return {type: ADD_ORDER, payload: card }
}

export function deleteOrderActionCreator(id: IOrder['id']) : DeleteOrderAction {
    return {type: DELETE_ORDER, payload: { id } }
}


export type ProjectAction = IncreaseQuantityAction | DecreaseQuantityAction | AddOrderAction | DeleteOrderAction;