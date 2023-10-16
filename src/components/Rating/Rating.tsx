import { SetStateAction } from "react";
import "./Rating.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface RatingProps {
  currentRating: number,
  rating: number,
  setRating: (value: SetStateAction<number>) => void,
  setHover: (value: SetStateAction<number>) => void,
  hover: number,
}

function Rating({ currentRating, rating, setRating, setHover, hover } : RatingProps ) {

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
        onMouseLeave={() => setHover(0)}
      />
    </label>
  );
}

export default Rating;
