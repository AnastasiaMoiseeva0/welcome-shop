import MenuList from "../MenuList/MenuList";
import ProductsCard from "../ProductsCard/ProductsCard";
import "./ProductsPage.css";

function ProductsPage({suppliesCards, onAddProduct, chooseCategory, categories}) {
  return (
    <>
      <section className="products">
        <div className="products__link">
          <MenuList chooseCategory={chooseCategory} categories={categories}/>
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
