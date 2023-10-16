import "./SearchBar.css";

interface SearchBarProps {
  search: string,
  onSearchChange: (value: string) => void
}

function SearchBar({ search, onSearchChange } : SearchBarProps){
  return (
    <form className="search-bar">
      <input
        className="search-bar__input"
        value={search}
        placeholder= "Search"
        type="text"
        name="searchInput"
        required
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => onSearchChange(e.currentTarget.value)}
      ></input>
  </form>
  );
}

export default SearchBar;
