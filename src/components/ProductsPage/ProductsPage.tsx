import MenuList from "../MenuList/MenuList";
import ProductsCard from "../ProductsCard/ProductsCard";
import "./ProductsPage.css";
import Menu from "../Menu/Menu";
import { useCallback } from 'react';
import { ICard } from "../../types/ICard";
import { useAppSelector } from "../../redux/hooks";
import { useDispatch } from "react-redux";
import { addOrder } from "../../redux/orders/ordersSlice";

function ProductsPage() {
  const dispatch = useDispatch();
  const category = useAppSelector(state => state.selectedCategory.selectCategory);

  const addToOrder = useCallback((card : ICard) => {
    dispatch(addOrder(card));
  }, [dispatch]);

  const filtred = useAppSelector(({ allProducts, search}) => {
    if (category) {
      return allProducts.products.filter((card) => card.category === category);
    }

    if (search.searchProducts) {
      return allProducts.products.filter((card) => search.searchProducts && card.description.toLowerCase().includes(search.searchProducts.toLowerCase()))
    }

    return allProducts.products;
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
      />
      </section>
    </>
  );
}

export default ProductsPage;
