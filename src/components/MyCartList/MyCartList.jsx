import MyCart from "../MyCart/MyCart";
import PayCheckbox from "../PayCheckbox/PayCheckbox";
import "./MyCartList.css";
import Menu from "../Menu/Menu";
import { useSelector } from "react-redux/es/hooks/useSelector";

function MyCartList({ onDelete, onMenuClose, isOpen, categories, chooseCategory }) {
  const totalPrice = useSelector(state => {
    return state.orders.reduce((acc, product) => {
      return acc += Number.parseFloat(product.price * product.quantity)
    }, 0)
  });

  const orders = useSelector(state => state.orders);

  const showOrders = (orders) => {
    return (
      <>
        {orders.map((card) => (
          <MyCart
            key={card.id}
            id={card.id}
            onDelete={onDelete}
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
        <Menu
        onMenuClose={onMenuClose}
        isOpen={isOpen}
        categories={categories}
        chooseCategory={chooseCategory}
      />
      </section>
    </>
  );
}

export default MyCartList;
