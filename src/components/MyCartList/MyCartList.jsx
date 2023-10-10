import MyCart from "../MyCart/MyCart";
import PayCheckbox from "../PayCheckbox/PayCheckbox";
import "./MyCartList.css";

function MyCartList({ orders, onDelete, onChangeCount }) {

  const showOrders = (orders) => {
    let totalPrice = 0;
    orders.forEach(card => totalPrice += Number.parseFloat(card.price * card.count))
    return (
      <>
        {orders.map((card) => (
          <MyCart
            key={card.id}
            card={card}
            onDelete={onDelete}
            onChangeCount={onChangeCount}
          />
        ))}
        <p className="my-cart__price">
          Total: {new Intl.NumberFormat().format(totalPrice)}$
        </p>
      </>
    );
  };

  const showNothing = () => {
    return (
      <div className="my-cart__empty">
        <h2>Products not added</h2>
      </div>
    );
  };

  return (
    <>
      <section className="my-cart">
        <h1 className="my-cart__title">My Cart</h1>
        <div className="my-cart__container">
          <div className="my-cart__list">
            {orders.length > 0 ? showOrders(orders) : showNothing()}
          </div>
          <PayCheckbox />
        </div>
      </section>
    </>
  );
}

export default MyCartList;
