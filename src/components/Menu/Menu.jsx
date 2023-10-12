import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Menu.css";
import logo from "../../images/logo.svg";
import MenuList from "../MenuList/MenuList";
import Button from "../Button/Button";

function Menu({ isOpen, onMenuClose, categories }) {
  return (
    <div className={`menu ${isOpen ? "menu_opened" : ""}`} onClick={onMenuClose}>
      <div className="menu__header">
        <img alt="Логотип сайта" src={logo} />
        <Button
          className="menu__header-icon"
          transparentButton="transparent"
          onClick={onMenuClose}
        >
          <FontAwesomeIcon
            className="menu-list__icon"
            icon={"circle-xmark"}
          />
        </Button>
      </div>
      <nav>
        <div className="menu__button-list">
          <Button className="header__products header__products-button">all products</Button>
          <Button
            className="header__cart-button"
            transparentButton="transparent"
          >
            <FontAwesomeIcon className="header__icon" icon={"cart-shopping"} />
            <p className="header__cart">my cart</p>
          </Button>
        </div>
        <MenuList categories={categories}/>
      </nav>
    </div>
  );
}

export default Menu;
