import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./MenuList.css";
import { ICategory } from "../../types/ICategory";

type MenuListProps = Partial<{
  chooseCategory: (category: string) => void;
  categories: ICategory[];
}>

function MenuList({chooseCategory, categories } : MenuListProps) {
  return (
    <ul className="menu-list">
      { categories?.map((el) => (
      <li className="menu-list__link" key={el.key} onClick={() => chooseCategory ? chooseCategory(el.key) : undefined}>
      <FontAwesomeIcon className="menu-list__icon" icon={el.icon} />
      <p className="menu-list__link-name">{el.name}</p>
    </li>
      )) }
    </ul>
  );
}

export default MenuList;
