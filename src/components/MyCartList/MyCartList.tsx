import MyCart from "../MyCart/MyCart";
import PayCheckbox from "../PayCheckbox/PayCheckbox";
import "./MyCartList.css";
import Menu from "../Menu/Menu";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { MyStore } from "../../redux/store";
import { IOrder } from "../../types/IOrder";

type MyCartListProps = Partial<{
  onMenuClose: () => void;
  isOpen: boolean;
  chooseCategory: (category: string) => void;
  categories: string[];
}>;

function MyCartList({
  onMenuClose,
  isOpen,
  categories,
  chooseCategory,
}: MyCartListProps) {

  const totalPrice = useSelector((state: MyStore) => {
    return state.orders.reduce((acc, product) => {
      return (acc += product.quantity * product.price);
    }, 0);
  });

  const orders = useSelector((state: MyStore) => state.orders);

  const showOrders = (orders: IOrder[]) => {
    return (
      <>
        {orders.map((card: IOrder) => (
          <MyCart key={card.id} id={card.id} />
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
