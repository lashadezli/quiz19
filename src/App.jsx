import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBar from './components/Searchbar';
import CountryList from './components/CountryList';
import RegionFilter from './components/RegionFilter';
import classes from './modules/Top.module.scss'
import data from '../data';

const App = () => {
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('');

  useEffect(() => {
    setCountries(data);
    setFilteredCountries(data);
  }, []);

  useEffect(() => {
    let filtered = countries;

    if (searchTerm) {
      filtered = filtered.filter((country) =>
        country.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedRegion) {
      filtered = filtered.filter((country) => country.region === selectedRegion);
    }

    setFilteredCountries(filtered);
  }, [searchTerm, selectedRegion, countries]);


  return (
    <div>
      <div className={classes["Main"]}>
        <h1>Where is the world?</h1>
        <button>Dark mode</button>
      </div>
      <div className={classes['Top']}>
        <SearchBar onSearch={(term) => setSearchTerm(term)} />
        <RegionFilter
          regions={Array.from(new Set(countries.map((country) => country.region)))}
          onSelect={(region) => setSelectedRegion(region)}
        />
      </div>
      {filteredCountries.length > 0 ? (
        <CountryList countries={filteredCountries} />
      ) : (
        <p>No countries found for the given search term and region.</p>
      )}
    </div>
  );
};

export default App;


App.js

