import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../images/logo.svg";

function Menu({ isOpen, onClose }) {
  return (
    <div className={`menu ${isOpen ? "menu_opened" : ""}`} onClick={onClose}>
      <div className="menu__header">
        <img className="menu__header-logo" alt="Логотип сайта" src={logo} />
        <button className="button button_type_transparent menu__header-icon">
          <FontAwesomeIcon
            className="menu__icon"
            icon={"circle-xmark"}
            onClick={onClose}
          />
        </button>
      </div>
      <nav className="menu__nav">
        <div className="menu__button-list">
          <button className="button header__products-button">
            all products
          </button>
          <button className="button button_type_transparent header__cart-button">
            <FontAwesomeIcon className="header__icon" icon={"cart-shopping"} />
            <p className="header__cart">my cart</p>
          </button>
        </div>
        <ul className="menu__list">
          <li className="menu__link">
            <FontAwesomeIcon className="menu__icon" icon={"shirt"} />
            <p className="menu__link-name">clothing & shoes</p>
          </li>
          <li className="menu__link">
            <FontAwesomeIcon className="menu__icon" icon={"film"} />
            <p className="menu__link-name">entertainment</p>
          </li>
          <li className="menu__link">
            <FontAwesomeIcon className="menu__icon" icon={"music"} />
            <p className="menu__link-name">music</p>
          </li>
          <li className="menu__link">
            <FontAwesomeIcon className="menu__icon" icon={"bicycle"} />
            <p className="menu__link-name">sport & lifestyle</p>
          </li>
          <li className="menu__link">
            <FontAwesomeIcon className="menu__icon" icon={"paw"} />
            <p className="menu__link-name">pets</p>
          </li>
          <li className="menu__link">
            <FontAwesomeIcon className="menu__icon" icon={"suitcase"} />
            <p className="menu__link-name">travel equipment</p>
          </li>
          <li className="menu__link">
            <FontAwesomeIcon className="menu__icon" icon={"plug"} />
            <p className="menu__link-name">electrical tools</p>
          </li>
          <li className="menu__link">
            <FontAwesomeIcon className="menu__icon" icon={"seedling"} />
            <p className="menu__link-name">growing & garden</p>
          </li>
          <li className="menu__link">
            <FontAwesomeIcon className="menu__icon" icon={"kitchen-set"} />
            <p className="menu__link-name">kitchen accessories</p>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Menu;
