
import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header style={headerStyle}>
      <h1>Welcome to our concessions powered by AI!</h1>
      <Link href="https://github.com/el-protoman/ai-chatbot-concessions">
        View on GitHub
      </Link>
    </header>
  );
};

const headerStyle = {
  color: "black",
  backgroundColor: '#f3f3f3',
  padding: '20px',
  textAlign: 'center',
  marginBottom: '40px',
};

const linkStyle = {
  textDecoration: 'none',
  color: 'blue',
  fontWeight: 'bold',
};

export default Header;
