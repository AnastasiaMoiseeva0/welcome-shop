import "./MyCart.css";
import Button from "../Button/Button";
import addButton from "../../images/AddButton.svg";
import substractButton from "../../images/SubstractButton.svg";

function MyCart({ card, onDelete }) {

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
          <Button transparentButton="transparent" className="cart__button">
            <img
              className="cart__round-button"
              alt="добавить товар"
              src={addButton}
            />
          </Button>
          <p className="cart__counter-title">{''}</p>
          <Button transparentButton="transparent" className="cart__button">
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
        <p className="cart__price">${card.price}</p>
      </div>
    </article>
  );
}

export default MyCart;
