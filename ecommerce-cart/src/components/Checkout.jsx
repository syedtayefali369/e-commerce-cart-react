import React from 'react';

const Checkout = ({ cart, getTotalPrice }) => {
  return (
    <div className="checkout">
      <h2>Checkout</h2>
      <ul>
        {cart.map(item => (
          <li key={item.id}>
            {item.name} - {item.quantity} x ${item.price}
          </li>
        ))}
      </ul>
      <p>Total: ${getTotalPrice()}</p>
    </div>
  );
};

const ProductList = () => {
  return (
    <div>
      <h2>Product List</h2>
      {/* Product items go here */}
    </div>
  );
};

export default ProductList;
