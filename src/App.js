import React, { useState } from 'react';
import './App.css';
import Header from './components/Header.jsx';
import ProductList from './components/Productlist.jsx';
import Cart from './components/Cart.jsx';
import Checkout from './components/Checkout.jsx';

function App() {
  const [cart, setCart] = useState([]);
  const [currentView, setCurrentView] = useState('products');

  const addToCart = (product) => {
    const existingItem = cart.find(item => item.id === product.id);
    if (existingItem) {
      setCart(cart.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity < 1) {
      removeFromCart(productId);
      return;
    }
    setCart(cart.map(item =>
      item.id === productId
        ? { ...item, quantity: newQuantity }
        : item
    ));
  };

  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  return (
    <div className="App">
      <Header 
        cartItemsCount={getTotalItems()} 
        onViewChange={setCurrentView}
        currentView={currentView}
      />
      
      <main className="main-content">
        {currentView === 'products' && (
          <ProductList addToCart={addToCart} />
        )}
        
        {currentView === 'cart' && (
          <Cart 
            cart={cart}
            removeFromCart={removeFromCart}
            updateQuantity={updateQuantity}
            totalPrice={getTotalPrice()}
            onCheckout={() => setCurrentView('checkout')}
          />
        )}
        
        {currentView === 'checkout' && (
          <Checkout 
            cart={cart}
            totalPrice={getTotalPrice()}
            onBackToCart={() => setCurrentView('cart')}
            onOrderComplete={() => {
              setCart([]);
              setCurrentView('products');
              alert('Order placed successfully!');
            }}
          />
        )}
      </main>
    </div>
  );
}

export default App;