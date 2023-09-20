import { useState, useEffect, useRef } from "react";
import { useForm } from "../../hooks/useForm";
import "./SearchBar.css";

function SearchBar({ onSearch }) {
  const [search, setSearch] = useState();
  const { isInvalid, handleChange, validate } = useForm({});
  const input = useRef(null);
  
  function handleSearch(event) {
    event.preventDefault();

    validate([input.current]);

    if (!isInvalid()) {
      onSearch(search);
    }
  }

  useEffect(() => {
    if (search) {
      onSearch(search);
    }
  }, []);

  function handleSearchChange(e) {
    setSearch(e.target.value);
    handleChange(e);
  }

  return (
    <form className="search-bar" onSubmit={(e) => handleSearch(e)}>
      <input
        className="search-bar__input"
        ref={input}
        onChange={(e) => handleSearchChange(e)}
        placeholder= "Search"
        value={search}
        type="text"
        name="searchInput"
        required
      ></input>
  </form>
  );
}

export default SearchBar;
