import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../../images/logo.svg";
import SearchBar from "../SearchBar/SearchBar";
import "./Header.css";
import Button from "../Button/Button";

function Header({ onMenuOpen }) {
  return (
    <div>
      <header className="header">
        <img className="header__logo" alt="Логотип сайта" src={logo} />
        <Button
          className="header__button"
          transparentButton="transparent"
          onClick={onMenuOpen}
        >
          <FontAwesomeIcon className="header__icon" icon={"bars"} />
        </Button>
        <SearchBar />
        <div className="header__navigation">
          <Button className="header__products-button">all products</Button>
          <Button
            className="header__cart-button"
            transparentButton="transparent"
          >
            <FontAwesomeIcon className="header__icon" icon={"cart-shopping"} />
            <p className="header__cart">my cart</p>
          </Button>
        </div>
      </header>
    </div>
  );
}

export default Header;
