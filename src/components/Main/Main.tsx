import Lead from "../Lead/Lead";
import Supplies from "../Supplies/Supplies";
import "./Main.css";
import Menu from '../Menu/Menu';
import { useDispatch } from "react-redux";
import { useCallback } from 'react';
import { addOrderActionCreator } from "../../redux/actions";
import { ICategory } from "../../types/ICategory";
import { ICard } from "../../types/ICard";

interface MainProps {
  categories: ICategory[];
  onMenuClose: () => void;
  isOpen: boolean;
  suppliesCards: ICard[];
  chooseCategory: (category: string) => void;
}

function Main({categories, suppliesCards, chooseCategory, onMenuClose, isOpen}: MainProps) {
  const dispatch = useDispatch();

  const addToOrder = useCallback((card: ICard) => {
    dispatch(addOrderActionCreator(card));
  }, [dispatch]);

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
        chooseCategory={chooseCategory}
      />
    </div>
  );
}

export default Main;
