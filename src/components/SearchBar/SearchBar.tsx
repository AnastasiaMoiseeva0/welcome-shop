import { useAppSelector, useSearchDispatch } from "../../redux/hooks";
import { setSearchActionCreator } from "../../redux/search/searchActions";
import "./SearchBar.css";

function SearchBar(){
  const search = useAppSelector((state) => state.search);
  const dispatch = useSearchDispatch();

  return (
    <form className="search-bar">
      <input
        className="search-bar__input"
        value={search || ''}
        placeholder= "Search"
        type="text"
        name="searchInput"
        required
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => dispatch(setSearchActionCreator(e.currentTarget.value))}
      ></input>
  </form>
  );
}

export default SearchBar;
