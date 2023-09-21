import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./ProductsCard.css";

function ProductsCard({ card, onAddProduct }) {
  return (
    <article className="card" onClick={() => onAddProduct(card)}>
      <div
        className="cart__url"
        style={{
          backgroundImage: `url(${card.url})`,
        }}
      ></div>
      <h2 className="card__description">{card.description}</h2>
      <p className="card__price">${card.price}</p>
      <p className="card__caption">{card.caption}</p>
      <div className="card__rating">
        <FontAwesomeIcon className="card__rating-icon" icon={"star"} />
        <FontAwesomeIcon className="card__rating-icon" icon={"star"} />
        <FontAwesomeIcon className="card__rating-icon" icon={"star"} />
        <FontAwesomeIcon className="card__rating-icon" icon={"star"} />
        <FontAwesomeIcon className="card__rating-icon" icon={"star"} />
      </div>
    </article>
  );
}

export default ProductsCard;
