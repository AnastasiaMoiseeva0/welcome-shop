import "./MyCart.css";
import Button from "../Button/Button";
import addButton from "../../images/AddButton.svg";
import substractButton from "../../images/SubstractButton.svg";
import { useSelector, useDispatch } from "react-redux";
import { useCallback } from 'react';
import { increaseQuantityActionCreator, decreaseQuantityActionCreator } from "../../redux/actions";

function MyCart({ id, onDelete }) {
  const dispatch = useDispatch();
  const card = useSelector(state => state.orders.find(order => order.id === id ));

  const increaseQuantity = useCallback((id) => {
    dispatch(increaseQuantityActionCreator(id));
  }, []);

  const decreaseQuantity = useCallback((id) => {
    dispatch(decreaseQuantityActionCreator(id));
  }, []);

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
              src={addButton}
            />
          </Button>
          <p className="cart__counter-title">{card.quantity}</p>
          <Button transparentButton="transparent" className="cart__button" onClick={() => decreaseQuantity(id)}>
            <img
              className="cart__round-button"
              alt="убрать товар"
              src={substractButton}
            />
          </Button>
        </div>
        <Button transparentButton="transparent" className="cart__remove-button" onClick={() => onDelete(card.id)}>
          remove
        </Button>
        <p className="cart__price">${new Intl.NumberFormat().format(card.price * card.quantity)}</p>
      </div>
    </article>
  );
}

export default MyCart;
