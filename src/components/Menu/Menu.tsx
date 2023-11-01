import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {Link } from "react-router-dom";
import "./Menu.css";
import logo from "../../images/logo.svg";
import MenuList from "../MenuList/MenuList";
import Button from "../Button/Button";
import { useAppSelector, useSetMenuOpenDispatch } from "../../redux/hooks";
import { setMenuOpenActionCreator } from "../../redux/menuOpen/setMenuOpenActions";

function Menu() {
  const dispatch = useSetMenuOpenDispatch();
  const isMenuOpen = useAppSelector(state => {
    return state.isMenuOpen
  });

  function closeMenu(event:  React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    event.stopPropagation();
    dispatch(setMenuOpenActionCreator(false));
  }


  return (
    <div className={`menu ${isMenuOpen ? "menu_opened" : ""}`} onClick={() => dispatch(setMenuOpenActionCreator(true))}>
      <div className="menu__header">
        <img alt="Логотип сайта" src={logo as unknown as string} />
        <Button
          className="menu__header-icon"
          transparentButton="transparent"
          onClick={(event) => {closeMenu(event)}}>
          <FontAwesomeIcon
            className="menu-list__icon"
            icon={"circle-xmark"}
          />
        </Button>
      </div>
      <nav>
        <div className="menu__button-list">
        <Button className="header__products-button">
            <Link to="/products" className="header__products header__products-button">all products</Link>
            </Button>
          <Button
            className="header__cart-button"
            transparentButton="transparent"
          >
            <FontAwesomeIcon className="header__icon" icon={"cart-shopping"} />
            <Link to="/my-cart" className="header__cart">my cart</Link>
          </Button>
        </div>
        <MenuList />
      </nav>
    </div>
  );
}

export default Menu;
