import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Link.css";

function Link() {
  return (
    <ul className="menu-list">
      <li className="menu-list__link">
        <FontAwesomeIcon className="menu-list__icon" icon={"shirt"} />
        <p className="menu-list__link-name">clothing & shoes</p>
      </li>
      <li className="menu-list__link">
        <FontAwesomeIcon className="menu-list__icon" icon={"film"} />
        <p className="menu-list__link-name">entertainment</p>
      </li>
      <li className="menu-list__link">
        <FontAwesomeIcon className="menu-list__icon" icon={"music"} />
        <p className="menu-list__link-name">music</p>
      </li>
      <li className="menu-list__link">
        <FontAwesomeIcon className="menu-list__icon" icon={"bicycle"} />
        <p className="menu-list__link-name">sport & lifestyle</p>
      </li>
      <li className="menu-list__link">
        <FontAwesomeIcon className="menu-list__icon" icon={"paw"} />
        <p className="menu-list__link-name">pets</p>
      </li>
      <li className="menu-list__link">
        <FontAwesomeIcon className="menu-list__icon" icon={"suitcase"} />
        <p className="menu-list__link-name">travel equipment</p>
      </li>
      <li className="menu-list__link">
        <FontAwesomeIcon className="menu-list__icon" icon={"plug"} />
        <p className="menu-list__link-name">electrical tools</p>
      </li>
      <li className="menu-list__link">
        <FontAwesomeIcon className="menu-list__icon" icon={"seedling"} />
        <p className="menu-list__link-name">growing & garden</p>
      </li>
      <li className="menu-list__link">
        <FontAwesomeIcon className="menu-list__icon" icon={"kitchen-set"} />
        <p className="menu-list__link-name">kitchen accessories</p>
      </li>
    </ul>
  );
}

export default Link;
