import React from 'react';
import classes from '../modules/CountryList.module.scss'

const CountryList = ({ countries }) => {
  return (
    <div className={classes['countries']}>
      <ul>
        {countries.map((country) => (
          <li key={country.name}>
            <img src={country.flags.png} alt={`${country.name} flag`} />
            <h3>{country.name}</h3>
            <div className={classes["country"]}>
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
