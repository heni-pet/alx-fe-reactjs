import React from 'react';

function Footer() {
  return (
    <footer style={{
      backgroundColor: '#0b3d91',
      color: 'white',
      textAlign: 'center',
      padding: '12px 0',
      marginTop: '20px'
    }}>
      <p style={{ margin: 0 }}>© {new Date().getFullYear()} Acme Co. — All rights reserved</p>
    </footer>
  );
}

export default Footer;
