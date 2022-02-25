// src/App.js
import './App.css';
import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';

import axios from 'axios';

function App() {
  const [countries, setCountries] = React.useState([]);

  React.useEffect(() => {
    axios({
      method: 'GET',
      url: 'https://ih-countries-api.herokuapp.com/countries',
    })
      .then((res) => {
        setCountries(res.data);
      })
      .catch((err) => {
        console.log('something went wrong! ', err);
      });
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route
          path="/:countryId"
          element={<CountryDetails countries={countries} />}
        />
      </Routes>
      <CountriesList countries={countries} />
    </div>
  );
}
export default App;
