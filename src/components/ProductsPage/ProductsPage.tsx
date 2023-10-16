import MenuList from "../MenuList/MenuList";
import ProductsCard from "../ProductsCard/ProductsCard";
import "./ProductsPage.css";
import Menu from "../Menu/Menu";
import { useDispatch } from "react-redux";
import { useCallback } from 'react';
import { addOrderActionCreator } from "../../redux/actions";

function ProductsPage({suppliesCards, chooseCategory, categories, onMenuClose, isOpen }) {
  const dispatch = useDispatch();

  const addToOrder = useCallback((card) => {
    dispatch(addOrderActionCreator(card));
  }, []);

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
              onAddProduct={addToOrder}
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
