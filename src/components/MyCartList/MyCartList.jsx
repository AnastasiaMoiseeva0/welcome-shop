import MyCart from "../MyCart/MyCart";
import PayCheckbox from "../PayCheckbox/PayCheckbox";
import suppliesCards from "../../utils/suppliesCards.json";
import Header from "../Header/Header";
import "./MyCartList.css";

function MyCartList() {
  return (
    <>
      <Header />
      <section className="my-cart">
        <h1 className="my-cart__title">My Cart</h1>
        <div className="my-cart__container">
          <div className="my-cart__list">
            {suppliesCards.slice(0, 3).map((id) => (
              <MyCart
                key={id}
                url={id.url}
                description={id.description}
                price={id.price}
                caption={id.caption}
              />
            ))}
            <p className="my-cart__price">
              Total: <span>396$</span>
            </p>
          </div>
          <PayCheckbox />
        </div>
      </section>
    </>
  );
}

export default MyCartList;
