import React from 'react';

import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header>
      <div>
        <Link className="navbar" to="/">
          Lab WikiCountries
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
