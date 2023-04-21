// components/Footer.js

import React from 'react';

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <p style={textStyle}>Team Gigahurtz</p>
    </footer>
  );
};

const footerStyle = {
  backgroundColor: '#f3f3f3',
  padding: '20px',
  textAlign: 'center',
  marginTop: '40px',
  borderTop: '1px solid #e1e1e1',
};

const textStyle = {
  color: 'black',
  fontSize: '20px',
  fontWeight: 'bold',
};

export default Footer;
