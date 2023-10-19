import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./MenuList.css";
import { useAppSelector, useSelectedCategoryDispatch } from "../../redux/hooks";
import { useCallback } from "react";
import { ICard } from "../../types/ICard";
import { selectorCategoryActionCreator } from "../../redux/selectedCategory/selectedCategoryActions";

function MenuList() {
  const categories = useAppSelector(state => state.allCategories);
  const category = useAppSelector(state => state.selectedCategory);

  const selectedDispatch = useSelectedCategoryDispatch();

  const chooseCategory = useCallback((category : ICard['category'] | null) => {
    selectedDispatch(selectorCategoryActionCreator(category));
  }, [selectedDispatch]);
  
  return (
    <ul className="menu-list">
      { categories?.map((el) => (
      <li className={`menu-list__link ${el.key ===category ? 'menu-list__link_active' : ''}`} key={el.key} onClick={() => chooseCategory ? chooseCategory(el.key === category ? null : el.key) : undefined}>
      <FontAwesomeIcon className="menu-list__icon" icon={el.icon} />
      <p className="menu-list__link-name">{el.name}</p>
    </li>
      )) }
    </ul>
  );
}

export default MenuList;
