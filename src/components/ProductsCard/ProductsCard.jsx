import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./ProductsCard.css";
import Button from "../Button/Button";

function ProductsCard({ card, onAddProduct }) {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);

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
        {[...Array(5)].map((star, index) => {
          const currentRating = index + 1;
          return (
            <label>
              <input
                className="card__rating-input"
                type="radio"
                name="rating"
                value={currentRating}
                onClick={() => setRating(currentRating)}
              ></input>
              <FontAwesomeIcon
                className="card__rating-icon"
                icon={"star"}
                color={currentRating <= (hover || rating) ? "#ffff00" : ""}
                onMouseEnter={() => setHover(currentRating)}
                onMouseLeave={() => setHover(null)}
              />
            </label>
          );
        })}
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
