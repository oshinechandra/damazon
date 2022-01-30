import React from 'react';
import './Header.css'

function Header() {
  return <div className='header'>
      <img className='header_logo' src='http://pngimg.com/uploads/amazon/amazon_PNG11.png'></img>
      <div
      className='header_ search'>
          <input
          className='header_searchInput'></input>
          {/*Logo*/}

      </div>
  </div>;
}

export default Header;

