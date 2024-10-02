import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <nav className="sidebar">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/popular">Popular Movies</Link></li>
        <li><Link to="/top-rated">Top Rated Movies</Link></li>
      </ul>
    </nav>
  );
}

export default Sidebar;