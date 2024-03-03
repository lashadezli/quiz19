import React, { useState } from 'react';
import classes from '../modules/Searchbar.module.scss'

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <form className={classes['Form']}onSubmit={handleSubmit}>
      <label className={classes['Searchbar']}>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder='Search for a country'
        />
      </label>
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;
