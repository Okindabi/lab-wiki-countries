import React from 'react';
import { useParams, Link } from 'react-router-dom';

const CountryDetails = (props) => {
  //   const [countriesList, setCountriesList] = React.useState(props.countries);
  const { countryId } = useParams();

  let foundCountry = props.countries.find((country) => {
    return country.alpha3Code === countryId;
  });
  return (
    <div className="CountryDetails">
      <h1>{foundCountry.name.common} Details</h1>
      <p>Capital: {foundCountry.capital}</p>
      <p>Area: {foundCountry.area}km²</p>
      <p>Borders: </p>
      {foundCountry.borders.map((borderCountry) => {
        return <Link to={`/${borderCountry}`}> {borderCountry} </Link>;
      })}
    </div>
  );
};

export default CountryDetails;
