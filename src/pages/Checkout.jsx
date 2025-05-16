import React from 'react';
import { useCart } from '../context/CartContext';
import './Checkout.css'; // We will create this next

const Checkout = () => {
    const { cart } = useCart();

    const total = cart.reduce((sum, item) => sum + item.price, 0);

    return (
        <div className="checkout-container">
            <h1>Checkout</h1>

            {cart.length === 0 ? (
                <p className="empty-message">Your cart is empty.</p>
            ) : (
                <>
                    <ul className="checkout-list">
                        {cart.map((item) => (
                            <li key={item.id} className="checkout-item">
                                <img src={item.image} alt={item.name} />
                                <div className="item-info">
                                    <h3>{item.name}</h3>
                                    <p>${item.price.toFixed(2)}</p>
                                </div>
                            </li>
                        ))}
                    </ul>

                    <div className="checkout-summary">
                        <h2>Total: ${total.toFixed(2)}</h2>
                        <button className="checkout-button">Proceed to Payment</button>
                    </div>
                </>
            )}
        </div>
    );
};

export default Checkout;
