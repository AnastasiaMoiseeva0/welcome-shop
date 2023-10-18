import "./MyCart.css";
import Button from "../Button/Button";
import addButton from "../../images/AddButton.svg";
import substractButton from "../../images/SubstractButton.svg";
import { useCallback } from 'react';
import { increaseQuantityActionCreator, decreaseQuantityActionCreator, deleteOrderActionCreator } from "../../redux/actions";
import { IOrder } from "../../types/IOrder";
import { MyStore } from "../../redux/store";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";

interface MyCardProps {
  id: number,
}
function MyCart({ id }: MyCardProps) {
  const dispatch = useAppDispatch();
  const card = useAppSelector((state: MyStore) => state.orders.find((order: IOrder) => order.id === id )!);

  const increaseQuantity = useCallback((id: IOrder['id']) => {
    dispatch(increaseQuantityActionCreator(id));
  }, [dispatch]);

  const decreaseQuantity = useCallback((id: IOrder['id']) => {
    dispatch(decreaseQuantityActionCreator(id));
  }, [dispatch]);

  const deleteCard = useCallback((id: IOrder['id']) => {
    dispatch(deleteOrderActionCreator(id));
  }, [dispatch]);

  return (
    <article className="cart">
      <div className="cart__description-container">
        <div
          className="cart__url"
          style={{
            backgroundImage: `url(${card.url})`,
          }}
        ></div>
        <h2 className="cart__description">{card.description}</h2>
      </div>
      <div className="cart__price-container">
        <div className="cart__counter">
          <Button transparentButton="transparent" className="cart__button" onClick={() => increaseQuantity(id)}>
            <img
              className="cart__round-button"
              alt="добавить товар"
              src={addButton as unknown as string}
            />
          </Button>
          <p className="cart__counter-title">{card.quantity}</p>
          <Button transparentButton="transparent" className="cart__button" onClick={() => decreaseQuantity(id)}>
            <img
              className="cart__round-button"
              alt="убрать товар"
              src={substractButton as unknown as string}
            />
          </Button>
        </div>
        <Button transparentButton="transparent" className="cart__remove-button" onClick={() => deleteCard(card.id)}>
          remove
        </Button>
        <p className="cart__price">${new Intl.NumberFormat().format(card.price * card.quantity)}</p>
      </div>
    </article>
  );
}

export default MyCart;
