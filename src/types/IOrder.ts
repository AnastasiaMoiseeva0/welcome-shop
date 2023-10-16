import { ICard } from "./ICard";

export interface IOrder extends ICard {
    quantity: number;
}