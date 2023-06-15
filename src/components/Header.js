import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../images/logo.svg";

function Header({onMenuOpen}) {

  return (
    <div>
      <header className="header">
        <img className="header__logo" alt="Логотип сайта" src={logo} />
        <button className="button button_type_transparent header__button">
          <FontAwesomeIcon className="header__icon" icon={"bars"} onClick={onMenuOpen}/>
        </button>
        <input
            className="header__search"
            placeholder="Search"
            type="text"
            name="searchInput"
            required
        ></input>
        <div className="header__navigation">
          <button className="button header__products-button">all products</button>
          <button className="button button_type_transparent header__cart-button">
          <FontAwesomeIcon className="header__icon" icon={"cart-shopping"} />
            <p className="header__cart">my cart</p>
          </button>
        </div>
      </header>
    </div>
  );
}

export default Header;
