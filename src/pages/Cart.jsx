import React from 'react';
import { useCart } from '../context/CartContext';
import './Cart.css';
import { Link } from 'react-router-dom';

const Cart = () => {
    const { cart, addToCart, removeFromCart, decreaseQuantity, clearCart } = useCart();

    const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

    return (
        <div className="cart-container">
            <h1 className="cart-title">Your Cart</h1>

            {cart.length === 0 ? (
                <p className="cart-empty">Your cart is currently empty.</p>
            ) : (
                <div className="cart-content">
                    <ul className="cart-items">
                        {cart.map((item) => (
                            <li key={item.id} className="cart-item">
                                <img src={item.image} alt={item.name} className="cart-item-image" />
                                <div className="cart-item-details">
                                    <h3>{item.name}</h3>
                                    <p>${item.price.toFixed(2)} each</p>
                                    <div className="quantity-controls">
                                        <button onClick={() => decreaseQuantity(item.id)}>-</button>
                                        <span>{item.quantity}</span>
                                        <button onClick={() => addToCart(item)}>+</button>
                                    </div>
                                    <p className="cart-item-total">
                                        Total: ${(item.price * item.quantity).toFixed(2)}
                                    </p>
                                    <button onClick={() => removeFromCart(item.id)} className="remove-button">
                                        Remove
                                    </button>
                                </div>
                            </li>
                        ))}
                    </ul>

                    <div className="order-summary">
                        <h2>Order Summary</h2>
                        <div className="summary-line">
                            <span>Subtotal</span>
                            <span>${total.toFixed(2)}</span>
                        </div>
                        <div className="summary-line">
                            <span>Shipping</span>
                            <span>$5.00</span>
                        </div>
                        <div className="summary-line total">
                            <span>Total</span>
                            <span>${(total + 5).toFixed(2)}</span>
                        </div>
                        <button className="clear-button" onClick={clearCart}>
                            Clear Cart
                        </button>
                        <Link to="/checkout">
                            <button className="checkout-button">Proceed to Checkout</button>
                        </Link>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Cart;
