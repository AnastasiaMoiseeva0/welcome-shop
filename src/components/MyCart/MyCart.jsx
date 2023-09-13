import "./MyCart.css";

function MyCart({ url, description, price }) {
  return (
    <article>
      <div>
        <img className="card__url" src={url} alt={description} />
        <h2 className="card__description">{description}</h2>
      </div>
      <div>
        <div>
          <button>+</button>
          <p>2</p>
          <button>-</button>
        </div>
        <button>remove</button>
        <p className="card__price">{price}</p>
      </div>
    </article>
  );
}

export default MyCart;
