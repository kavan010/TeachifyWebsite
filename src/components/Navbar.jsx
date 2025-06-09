// src/components/Navbar.jsx
import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import '../styles/styles.css';

const Navbar = ({ toggleTheme, isDark }) => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/?search=${encodeURIComponent(query.trim())}`);
      setQuery('');
    }
  };

  return (
    <nav className="navbar">
      {/* Search form on the far left */}
      <form className="nav-search" onSubmit={handleSearch}>
        <input
          type="text"
          className="search-input"
          placeholder="Search courses..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit" className="search-button">🔍</button>
      </form>

      {/* Teachify logo next */}
      <div className="nav-logo">Teachify</div>

      {/* Links + theme toggle on the right */}
      <div className="nav-links-container">
        <div className="nav-links">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
            end
          >
            Browse
          </NavLink>
          <NavLink
            to="/profile"
            className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
          >
            Profile
          </NavLink>
          <NavLink
            to="/achievements"
            className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
          >
            Achievements
          </NavLink>
        </div>

        <button className="theme-toggle" onClick={toggleTheme}>
          {isDark ? '☀️' : '🌙'}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
