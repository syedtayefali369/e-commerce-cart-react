const Cart = ({ cart, updateQuantity, removeFromCart }) => {
  return (
    <div className="cart">
      <h2>Cart</h2>
      <ul>
        {cart.map(item => (
          <li key={item.id}>
            {item.name} - {item.quantity} x ${item.price}
            <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
            <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;