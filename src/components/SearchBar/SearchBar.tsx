import { useDispatch } from "react-redux";
import { useAppSelector } from "../../redux/hooks";
import { searchProducts } from '../../redux/search/searchSlice';
import "./SearchBar.css";

function SearchBar(){
  const search = useAppSelector((state) => state.search.searchProducts);
  const dispatch = useDispatch();

  return (
    <form className="search-bar">
      <input
        className="search-bar__input"
        value={search || ''}
        placeholder= "Search"
        type="text"
        name="searchInput"
        required
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => dispatch(searchProducts(e.currentTarget.value))}
      ></input>
  </form>
  );
}

export default SearchBar;
