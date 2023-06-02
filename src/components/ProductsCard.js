import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ProductsCard() {
  return (
    <article className="card">
      <div className="card__url"></div>
      <h2 className="card__description">
        Vintage Typewriter to post awesome stories about UI design and webdev.
      </h2>
      <p className="card__price">$49.50</p>
      <p className="card__caption">
        Eligible for Shipping To Mars or somewhere else
      </p>
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
