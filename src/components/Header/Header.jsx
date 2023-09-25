import {Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../../images/logo.svg";
import SearchBar from "../SearchBar/SearchBar";
import "./Header.css";
import Button from "../Button/Button";

function Header({ onMenuOpen, onSearchChange, search }) {
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
        <SearchBar search={search} onSearchChange={onSearchChange} />
        <div className="header__navigation">
          <Button className="header__products-button">
            <Link to="/products" className="header__products">all products</Link>
            </Button>
          <Button
            className="header__cart-button"
            transparentButton="transparent"
          >
            <FontAwesomeIcon className="header__icon" icon={"cart-shopping"} />
            <Link to="/my-cart" className="header__cart">my cart</Link>
          </Button>
        </div>
      </header>
    </div>
  );
}

export default Header;
