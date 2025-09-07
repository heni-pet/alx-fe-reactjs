import React from 'react';

function Services() {
  const listStyle = { textAlign: 'left', maxWidth: '700px', margin: '0 auto', fontSize: '18px' };

  return (
    <div style={{ padding: '40px' }}>
      <h1 style={{ textAlign: 'center' }}>Our Services</h1>
      <ul style={listStyle}>
        <li style={{ margin: '10px 0' }}>Technology Consulting</li>
        <li style={{ margin: '10px 0' }}>Market Analysis</li>
        <li style={{ margin: '10px 0' }}>Product Development</li>
      </ul>
    </div>
  );
}

export default Services;
