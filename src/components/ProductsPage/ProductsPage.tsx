import MenuList from "../MenuList/MenuList";
import ProductsCard from "../ProductsCard/ProductsCard";
import "./ProductsPage.css";
import Menu from "../Menu/Menu";
import { useCallback } from 'react';
import { addOrderActionCreator } from "../../redux/orders/ordersActions";
import { ICard } from "../../types/ICard";
import { useAppSelector, useOrdersDispatch } from "../../redux/hooks";

interface ProductPageProps {
  onMenuClose: () => void;
  isOpen: boolean;
};

function ProductsPage({ onMenuClose, isOpen } : ProductPageProps) {
  const dispatch = useOrdersDispatch();
  const category = useAppSelector(state => state.selectedCategory);

  const addToOrder = useCallback((card : ICard) => {
    dispatch(addOrderActionCreator(card));
  }, [dispatch]);

  const filtred = useAppSelector(({ selectedCategory, allProducts, search}) => {
    if (selectedCategory) {
      return allProducts.filter((card) => card.category === category);
    }

    if (search) {
      return allProducts.filter((card) => card.description.toLowerCase().includes(search?.toLowerCase()))
    }

    return allProducts;
  })

  return (
    <>
      <section className="products">
        <div className="products__link">
          <MenuList />
        </div>
        <div className="products__list">
          {filtred.map((card) => (
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
      />
      </section>
    </>
  );
}

export default ProductsPage;
