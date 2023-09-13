import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Menu.css";
import logo from "../../images/logo.svg";
import Link from "../Link/Link";

function Menu({ isOpen, onClose }) {
  return (
    <div className={`menu ${isOpen ? "menu_opened" : ""}`} onClick={onClose}>
      <div className="menu__header">
        <img alt="Логотип сайта" src={logo} />
        <button className="button button_type_transparent menu__header-icon">
          <FontAwesomeIcon
            className="menu-list__icon"
            icon={"circle-xmark"}
            onClick={onClose}
          />
        </button>
      </div>
      <nav>
        <div className="menu__button-list">
          <button className="button header__products-button">
            all products
          </button>
          <button className="button button_type_transparent header__cart-button">
            <FontAwesomeIcon className="header__icon" icon={"cart-shopping"} />
            <p className="header__cart">my cart</p>
          </button>
        </div>
        <Link />
      </nav>
    </div>
  );
}

export default Menu;
