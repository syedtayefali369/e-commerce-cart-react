import React from 'react';

const Header = ({ cartItemsCount, onViewChange, currentView }) => {
  return (
    <header className="header">
      <div className="container">
        <h1 className="logo" onClick={() => onViewChange('products')}>
          🛍️ ShopEasy
        </h1>
        
        <nav className="nav">
          <button 
            className={`nav-btn ${currentView === 'products' ? 'active' : ''}`}
            onClick={() => onViewChange('products')}
          >
            Products
          </button>
          
          <button 
            className={`nav-btn cart-btn ${currentView === 'cart' ? 'active' : ''}`}
            onClick={() => onViewChange('cart')}
          >
            🛒 Cart ({cartItemsCount})
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;