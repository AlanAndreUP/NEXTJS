import React from 'react';
import './estilosperrones.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faEllipsisV,faPlus  } from '@fortawesome/free-solid-svg-icons';

function Header() {
  return (
    <header>
      <nav className="navbar">
        <img
          src="https://www.edigitalagency.com.au/wp-content/uploads/TikTok-logo-white-horizontal-medium-size.png"
          style={{ width: '120px', marginLeft: '10px' }}
          alt="TikTok Logo"
        />
        <div className="search-bar">
          <input
            type="text"
            className="search-input"
            placeholder="Search"
          />
          <button className="search-btn">
            <FontAwesomeIcon icon={faSearch} style={{ width: '35px',color:'gray'}} />
          </button>
        </div>
        <div className="nav-right">
          <button className="upload-btn">
          <FontAwesomeIcon icon={faPlus} style={{width: '22px', marginRight:'10px'}} /> Upload
          </button>
          <button className="login-btn">Log in</button>
          <div className="btn btn-default">
            <FontAwesomeIcon icon={faEllipsisV} style={{width: '5px'}} size="2x" />
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
