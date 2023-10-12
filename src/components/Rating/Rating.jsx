import "./Rating.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Rating({ currentRating }) {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);

  return (
    <label className="rating">
      <input
        className="rating__input"
        type="radio"
        name="rating"
        value={currentRating}
        onClick={() => setRating(currentRating)}
      ></input>
      <FontAwesomeIcon
        className="rating__icon"
        icon={"star"}
        color={currentRating <= (hover || rating) ? "#ffff00" : ""}
        onMouseEnter={() => setHover(currentRating)}
        onMouseLeave={() => setHover(null)}
      />
    </label>
  );
}

export default Rating;
