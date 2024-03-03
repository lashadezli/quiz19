import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

const CountryDetails = () => {
  const { countryCode } = useParams();
  const [countryDetails, setCountryDetails] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://restcountries.com/v3.1/alpha/${countryCode}`);
        setCountryDetails(response.data[0]);
      } catch (error) {
        console.error('Error fetching country details:', error);
      }
    };

    fetchData();
  }, [countryCode]);

  if (!countryDetails) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <Link to="/">Back to Home</Link>
      <h1>{countryDetails.name.common}</h1>
    </div>
  );
};

export default CountryDetails;
