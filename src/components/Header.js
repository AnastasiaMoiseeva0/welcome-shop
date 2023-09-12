import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../images/logo.svg";
import SearchBar from "./SearchBar";
import { useState } from "react";
import suppliesCards from "../utils/suppliesCards.json";
import Fuse from "fuse.js";

function Header({ onMenuOpen }) {
  const [data, setData] = useState(suppliesCards);

  const searchData = (pattern) => {
    if (!pattern) {
      setData(suppliesCards);
      return;
    }
  
  const fuse = new Fuse(data, {
    keys: ["description", "caption"],
  });

  const result = fuse.search(pattern);

  const matches = [];
  if (!result.length) {
    setData([]);
  } else {
    result.forEach(({ item }) => {
      matches.push(item);
    });
    setData(matches);
    console.log(matches);
  }
  };

  return (
    <div>
      <header className="header">
        <img className="header__logo" alt="Логотип сайта" src={logo} />
        <button className="button button_type_transparent header__button">
          <FontAwesomeIcon
            className="header__icon"
            icon={"bars"}
            onClick={onMenuOpen}
          />
        </button>
        <SearchBar
          placeholder="Search"
          onChange={(e) => searchData(e.target.value)}
        />
        <div className="header__navigation">
          <button className="button header__products-button">
            all products
          </button>
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
