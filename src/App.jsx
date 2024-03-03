import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBar from './components/Searchbar';
import CountryList from './components/CountryList';

const App = () => {
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/data.json');
        setCountries(response.data);
        setFilteredCountries(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const filtered = countries.filter((country) =>
      country.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredCountries(filtered);
  }, [searchTerm, countries]);

  return (
    <div>
      <h1>Country Explorer</h1>
      <SearchBar onSearch={(term) => setSearchTerm(term)} />
      {filteredCountries.length > 0 ? (
        <CountryList countries={filteredCountries} />
      ) : (
        <p>No countries found for the given search term.</p>
      )}
    </div>
  );
};

export default App;
