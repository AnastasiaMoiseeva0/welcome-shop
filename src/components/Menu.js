import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Menu() {
  return (
    <nav>
      <ul>
        <li>
          <FontAwesomeIcon className="menu__icon" icon={"shirt"} />
        </li>
        <li>
          <FontAwesomeIcon className="menu__icon" icon={"film"} />
        </li>
        <li>
          <FontAwesomeIcon className="menu__icon" icon={"film"} />
        </li>
        <li>
          <FontAwesomeIcon className="menu__icon" icon={"music"} />
        </li>
        <li>
          <FontAwesomeIcon className="menu__icon" icon={"bicycle"} />
        </li>
        <li>
          <FontAwesomeIcon className="menu__icon" icon={"paw"} />
        </li>
        <li>
          <FontAwesomeIcon className="menu__icon" icon={"suitcase"} />
        </li>
        <li>
          <FontAwesomeIcon className="menu__icon" icon={"plug"} />
        </li>
        <li>
          <FontAwesomeIcon className="menu__icon" icon={"seedling"} />
        </li>
        <li>
          <FontAwesomeIcon className="menu__icon" icon={"kitchen-set"} />
        </li>
      </ul>
    </nav>
  );
}
