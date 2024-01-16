import Lead from "../Lead/Lead";
import Supplies from "../Supplies/Supplies";
import "./Main.css";
import Menu from '../Menu/Menu';
import { useCallback } from 'react';
import { ICard } from "../../types/ICard";
import { addOrder } from '../../redux/orders/ordersSlice';
import { useDispatch } from "react-redux";

function Main() {
  const dispatch = useDispatch();

  const addToOrder = useCallback((card: ICard) => {
    dispatch(addOrder(card));
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
