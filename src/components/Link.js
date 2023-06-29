import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Link() {
  return (
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
  );
}

export default Link;
