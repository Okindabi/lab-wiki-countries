import React from 'react';
import { Link } from 'react-router-dom';

const CountriesList = (props) => {
  let countriesList = props.countries;

  return (
    <ul>
      {countriesList.map((country) => {
        return (
          <li>
            <Link to={`/${country.alpha3Code}`}>{country.name.common}</Link>
          </li>
        );
      })}
    </ul>
  );
};

export default CountriesList;
