
import React from 'react';
import Header from './Header';
import Footer from './Footer';

const CheckoutComponent = () => {
  const orderItems = [
    { id: 1, name: 'Pizza', price: 12.99 },
    { id: 2, name: 'Beer', price: 4.99 },
    { id: 3, name: 'Hot Dog', price: 3.49 },
  ];

  const total = orderItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <div>
      <Header />
      <div style={containerStyle}>
        <h2 style={titleStyle}>Order Confirmation</h2>
        <ul style={listStyle}>
          {orderItems.map((item) => (
            <li key={item.id} style={listItemStyle}>
              {item.name} - ${item.price.toFixed(2)}
            </li>
          ))}
        </ul>
        <p style={totalStyle}>Total: ${total.toFixed(2)}</p>
      </div>
      <Footer />
    </div>
  );
};

const containerStyle = {
  maxWidth: '600px',
  margin: '0 auto',
  padding: '0 20px',
};

const titleStyle = {
  marginBottom: '20px',
  fontWeight: 'bold',
};

const listStyle = {
  listStyleType: 'none',
  paddingLeft: 0,
  marginBottom: '10px',
};

const listItemStyle = {
  marginBottom: '5px',
  fontWeight: 'normal',
};

const totalStyle = {
  fontWeight: 'bold',
};

export default CheckoutComponent;
