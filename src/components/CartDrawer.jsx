import React from 'react';
import { useCart } from '../context/CartContext';
//import styles from './CartDrawer.module.css';
import './CartDrawer.module.css'; // Assuming you have a CSS module for styling
const CartDrawer = ({ isOpen, onClose }) => {
  const { cart, removeFromCart } = useCart();
  if (location.pathname === '/' || location.pathname === '/shop') {
    return null;
  }
  
  return (
    <div className={`cart-drawer ${isOpen ? 'open' : ''}`}>
      <button className="close-btn" onClick={onClose}>✕</button>
      <h3>Your Cart</h3>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cart.map(item => (
          <div key={item.id} className="cart-item">
            <p>{item.name} x {item.quantity}</p>
            <p>${(item.price * item.quantity).toFixed(2)}</p>
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
          </div>
        ))
      )}
    </div>
  );
};

export default CartDrawer;
