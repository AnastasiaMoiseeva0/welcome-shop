import {Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../../images/logo.svg";
import SearchBar from "../SearchBar/SearchBar";
import "./Header.css";
import Button from "../Button/Button";
import { setMenuOpen } from '../../redux/menuOpen/setMenuOpenSlice';
import { useDispatch } from "react-redux";

function Header() {
  const dispatch = useDispatch();

  return (
    <div>
      <header className="header">
        <Link to="/">
          <img className="header__logo" alt="Логотип сайта" src={logo as unknown as string} />
        </Link>
        <Button
          className="header__button"
          transparentButton="transparent"
          onClick={() => dispatch(setMenuOpen(true))}
        >
          <FontAwesomeIcon className="header__icon" icon={"bars"} />
        </Button>
        <SearchBar />
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
