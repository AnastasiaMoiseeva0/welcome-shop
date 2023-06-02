import ProductsCard from "./ProductsCard";

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
                <ProductsCard />
            </div>
        </section>
      </main>
    </div>
  );
}

export default Main;
