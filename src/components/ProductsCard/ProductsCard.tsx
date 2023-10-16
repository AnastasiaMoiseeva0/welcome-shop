import Rating from "../Rating/Rating"
import "./ProductsCard.css";
import Button from "../Button/Button";
import { useState } from "react";

function ProductsCard({ card, onAddProduct }) {
  const [rating, setRating] = useState<number>(0);
  const [hover, setHover] = useState<number>(0);

  return (
    <article className="card">
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
        {[...Array(5)].map((_, index) => (
          <Rating rating={rating} hover={hover} setHover={setHover} setRating={setRating} currentRating={index + 1} key={index.toString()} />
        ))}
        <Button
          transparentButton="transparent"
          className="card__add-button"
          onClick={() => onAddProduct(card)}
        >
          add
        </Button>
      </div>
    </article>
  );
}

export default ProductsCard;
