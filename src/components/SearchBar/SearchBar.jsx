import { useState, useEffect, useRef } from "react";
import { useForm } from "../../hooks/useForm";

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
    <form onSubmit={(e) => handleSearch(e)}>
      <input
        ref={input}
        className="header__search"
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
