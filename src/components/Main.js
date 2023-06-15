import ProductsCard from "./ProductsCard";
import { suppliesCards } from "../utils/cards";

function Main() {
  
  return (
    <div>
      <main className="main-content">
        <section className="lead">
          <div className="lead__image">
            <h1 className="lead__title">welcome</h1>
          </div>
        </section>
        <section className="supplies">
            <h2 className="supplies__title">Top Products</h2>   
            <div className="supplies__cards">
                {suppliesCards.slice(0, 5).map((id) => <ProductsCard key={id} url={id.url} description={id.description} price={id.price} caption={id.caption}/>) }
            </div>
        </section>
      </main>
    </div>
  );
}

export default Main;
