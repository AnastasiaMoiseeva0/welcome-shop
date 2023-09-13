import MyCart from "../MyCart/MyCart";
import PayCheckbox from "../PayCheckbox/PayCheckbox";
import suppliesCards from "../../utils/suppliesCards.json";
import Header from "../Header/Header";
import "./MyCartList.css"

function MyCartList() {
  return (
    <>
    <Header />
    <section className="my-cart">
      <h1 className="my-cart__title">My Cart</h1>
      {suppliesCards.slice(0, 3).map((id) => <MyCart key={id} url={id.url} description={id.description} price={id.price} caption={id.caption}/>) }
      <p>Total:<span>396$</span></p>
      <PayCheckbox />
    </section>
    </>
  );
}

export default MyCartList;
