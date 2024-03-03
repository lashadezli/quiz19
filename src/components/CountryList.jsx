import React from 'react';

const CountryList = ({ countries }) => {
  return (
    <div>
      <h2>Country List</h2>
      <ul>
        {countries.map((country) => (
          <li key={country.name}>
            <img src={country.flags.png} alt={`${country.name} flag`} />
            <div>
              <h3>{country.name}</h3>
              <p>Population: {country.population}</p>
              <p>Region: {country.region}</p>
              <p>Capital: {country.capital}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CountryList;
