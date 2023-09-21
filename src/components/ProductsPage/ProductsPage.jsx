import MenuList from "../MenuList/MenuList";
import suppliesCards from "../../utils/suppliesCards.json";
import ProductsCard from "../ProductsCard/ProductsCard";
import "./ProductsPage.css";

function ProductsPage({onAddProduct}) {
  return (
    <>
      <section className="products">
        <div className="products__link">
          <MenuList />
        </div>
        <div className="products__list">
          {suppliesCards.map((card) => (
            <ProductsCard
              key={card.id}
              card={card}
              onAddProduct={onAddProduct}
            />
          ))}
        </div>
      </section>
    </>
  );
}

export default ProductsPage;
