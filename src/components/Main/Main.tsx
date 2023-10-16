import Lead from "../Lead/Lead";
import Supplies from "../Supplies/Supplies";
import "./Main.css";
import Menu from '../Menu/Menu';
import { useDispatch } from "react-redux";
import { useCallback } from 'react';
import { addOrderActionCreator } from "../../redux/actions";
import { IOrder } from "../../types/IOrder";

interface MainProps {
  categories: string[];
  onMenuClose: () => void;
  isOpen: boolean;
  suppliesCards: string[];
}

function Main({categories, suppliesCards, onMenuClose, isOpen}: MainProps) {
  const dispatch = useDispatch();

  const addToOrder = useCallback((card: IOrder) => {
    dispatch(addOrderActionCreator(card));
  }, []);

  return (
    <div>
      <main>
        <Lead />
        <Supplies suppliesCards={suppliesCards} onAddProduct={addToOrder}/>
      </main>
      <Menu
        onMenuClose={onMenuClose}
        isOpen={isOpen}
        categories={categories}
      />
    </div>
  );
}

export default Main;
