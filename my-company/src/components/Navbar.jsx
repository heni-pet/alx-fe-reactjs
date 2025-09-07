import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const navStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '12px 20px',
    backgroundColor: '#0b3d91',
    color: 'white'
  };

  const linkStyle = {
    color: 'white',
    textDecoration: 'none',
    margin: '0 10px',
    fontWeight: '500'
  };

  const brandStyle = { fontSize: '20px', fontWeight: '700' };

  return (
    <header style={navStyle}>
      <div style={brandStyle}>Acme Co.</div>
      <nav>
        <Link to="/" style={linkStyle}>Home</Link>
        <Link to="/about" style={linkStyle}>About</Link>
        <Link to="/services" style={linkStyle}>Services</Link>
        <Link to="/contact" style={linkStyle}>Contact</Link>
      </nav>
    </header>
  );
}

export default Navbar;
