import "./MyCart.css";
import Button from "../Button/Button";
import addButton from "../../images/AddButton.svg";
import substractButton from "../../images/SubstractButton.svg"

function MyCart({ url, description, price }) {
  return (
    <article className="cart">
      <div className="cart__description-container">
        <img className="cart__url" src={url} alt={description} />
        <h2 className="cart__description">{description}</h2>
      </div>
      <div className="cart__price-container">
        <div className="cart__counter">
          <Button transparentButton="transparent" className="cart__button">
            <img className="cart__round-button" alt="добавить товар" src={addButton}/>
          </Button>
          <p className="cart__counter-title">2</p>
          <Button transparentButton="transparent" className="cart__button">
            <img className="cart__round-button" alt="убрать товар" src={substractButton}/>
          </Button>
        </div>
        <Button transparentButton="transparent" className="cart__remove-button">remove</Button>
        <p className="cart__price">{price}</p>
      </div>
    </article>
  );
}

export default MyCart;
