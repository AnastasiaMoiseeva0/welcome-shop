import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ProductsCard({ url, description, price, caption }) {
  return (
    <article className="card">
      <img className="card__url" src={url} />
      <h2 className="card__description">{description}</h2>
      <p className="card__price">{price}</p>
      <p className="card__caption">{caption}</p>
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
