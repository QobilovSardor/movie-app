import React from 'react';

function Header() {
  return (
    <div className='header'>
      <nav>
        <div className="nav-wrapper container">
          <a href="#" className="brand-logo">React movie app</a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>Movies</li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;