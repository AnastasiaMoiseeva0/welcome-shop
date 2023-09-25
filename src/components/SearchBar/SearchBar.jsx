import "./SearchBar.css";

function SearchBar({ search, onSearchChange }){
  return (
    <form className="search-bar">
      <input
        className="search-bar__input"
        value={search}
        placeholder= "Search"
        type="text"
        name="searchInput"
        required
        onChange={(e) => onSearchChange(e.target.value)}
      ></input>
  </form>
  );
}

export default SearchBar;
