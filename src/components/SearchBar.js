function SearchBar({ onChange, placeholder }) {
  return (
    <input
      className="header__search"
      onChange={onChange}
      placeholder={placeholder}
      type="text"
      name="searchInput"
      required
    ></input>
  );
}

export default SearchBar;
