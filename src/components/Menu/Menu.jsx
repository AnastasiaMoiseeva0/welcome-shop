import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Menu.css";
import logo from "../../images/logo.svg";
import Link from "../Link/Link";
import Button from "../Button/Button";

function Menu({ isOpen, onClose }) {
  return (
    <div className={`menu ${isOpen ? "menu_opened" : ""}`} onClick={onClose}>
      <div className="menu__header">
        <img alt="Логотип сайта" src={logo} />
        <Button
          className="menu__header-icon"
          transparentButton="transparent"
          onClick={onClose}
        >
          <FontAwesomeIcon
            className="menu-list__icon"
            icon={"circle-xmark"}
          />
        </Button>
      </div>
      <nav>
        <div className="menu__button-list">
          <Button className="header__products-button">all products</Button>
          <Button
            className="header__cart-button"
            transparentButton="transparent"
          >
            <FontAwesomeIcon className="header__icon" icon={"cart-shopping"} />
            <p className="header__cart">my cart</p>
          </Button>
        </div>
        <Link />
      </nav>
    </div>
  );
}

export default Menu;
