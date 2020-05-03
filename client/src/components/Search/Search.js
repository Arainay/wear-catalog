import React from 'react';
import './search.scss';

const Search = ({ search, placeholder }) => {
  const handleChange = event => {
    search(event.target.value);
  };

  return (
    <div className="search search__inner">
      <input
        type="search"
        className="search__field"
        placeholder={placeholder}
        onChange={handleChange}
      />
    </div>
  );
};

export default Search;
