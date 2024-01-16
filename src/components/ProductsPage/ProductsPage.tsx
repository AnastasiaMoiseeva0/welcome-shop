import MenuList from '../MenuList/MenuList';
import ProductsCard from '../ProductsCard/ProductsCard';
import './ProductsPage.css';
import Menu from '../Menu/Menu';
import { useCallback } from 'react';
import { ICard } from '../../types/ICard';
import { useAppSelector } from '../../redux/hooks';
import { useDispatch } from 'react-redux';
import { addOrder } from '../../redux/orders/ordersSlice';

function ProductsPage() {
  const dispatch = useDispatch();
  const category = useAppSelector(
    (state) => state.selectedCategory.selectCategory
  );
  const products = useAppSelector((state) => state.allProducts.products);

  const addToOrder = useCallback(
    (card: ICard) => {
      dispatch(addOrder(card));
    },
    [dispatch]
  );

  const filtred = useAppSelector(({ search }) => {
    let filtredProducts = [...products];
    if (category) {
      filtredProducts = filtredProducts.filter(
        (card) => card.category === category
      );
    }

    if (search.searchProducts) {
      filtredProducts = filtredProducts.filter(
        (card) =>
          search.searchProducts &&
          card.description
            .toLowerCase()
            .includes(search.searchProducts.toLowerCase())
      );
    }

    return filtredProducts;
  });

  return (
    <>
      <section className="products">
        <div className="products__link">
          <MenuList />
        </div>
        {filtred.length === 0 ? (
          <h2 className="products__list-empty">
            Nothing was found for your query
          </h2>
        ) : (
          <div className="products__list">
            {filtred.map((card) => (
              <ProductsCard
                key={card.id}
                card={card}
                onAddProduct={addToOrder}
              />
            ))}
          </div>
        )}
        <Menu />
      </section>
    </>
  );
}

export default ProductsPage;
