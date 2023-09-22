import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./MenuList.css";
import categories from '../../utils/categories.json';

function MenuList({chooseCategory}) {
  return (
    <ul className="menu-list">
      { categories.map(el => (
      <li className="menu-list__link" key={el.key} onClick={() => chooseCategory(el.key)}>
      <FontAwesomeIcon className="menu-list__icon" icon={el.icon} />
      <p className="menu-list__link-name">{el.name}</p>
    </li>
      )) }
    </ul>
  );
}

export default MenuList;
