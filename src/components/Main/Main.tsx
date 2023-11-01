import Lead from "../Lead/Lead";
import Supplies from "../Supplies/Supplies";
import "./Main.css";
import Menu from '../Menu/Menu';
import { useCallback } from 'react';
import { addOrderActionCreator } from "../../redux/orders/ordersActions";
import { ICard } from "../../types/ICard";
import { useOrdersDispatch } from "../../redux/hooks";

function Main() {
  const dispatch = useOrdersDispatch();

  const addToOrder = useCallback((card: ICard) => {
    dispatch(addOrderActionCreator(card));
  }, [dispatch]);


  return (
    <div>
      <main>
        <Lead />
        <Supplies onAddProduct={addToOrder}/>
      </main>
      <Menu
      />
    </div>
  );
}

export default Main;
