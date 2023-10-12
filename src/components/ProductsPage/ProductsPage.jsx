import MenuList from "../MenuList/MenuList";
import ProductsCard from "../ProductsCard/ProductsCard";
import "./ProductsPage.css";
import Menu from "../Menu/Menu";

function ProductsPage({suppliesCards, onAddProduct, chooseCategory, categories, onMenuClose, isOpen }) {
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

export default ProductsPage;
