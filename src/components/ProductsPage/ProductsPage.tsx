import MenuList from "../MenuList/MenuList";
import ProductsCard from "../ProductsCard/ProductsCard";
import "./ProductsPage.css";
import Menu from "../Menu/Menu";
import { useCallback } from 'react';
import { addOrderActionCreator } from "../../redux/orders/ordersActions";
import { ICard } from "../../types/ICard";
import { useOrdersDispatch } from "../../redux/hooks";

interface ProductPageProps {
  onMenuClose: () => void;
  isOpen: boolean;
  suppliesCards: ICard[];
};

function ProductsPage({suppliesCards, onMenuClose, isOpen } : ProductPageProps) {
  const dispatch = useOrdersDispatch();

  const addToOrder = useCallback((card : ICard) => {
    dispatch(addOrderActionCreator(card));
  }, [dispatch]);

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
