import Rating from "../Rating/Rating"
import "./ProductsCard.css";
import Button from "../Button/Button";

function ProductsCard({ card, onAddProduct }) {
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
        {[...Array(5)].map((index) => {
          <Rating value={index + 1} key={index} />
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
