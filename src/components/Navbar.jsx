// Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext.jsx';
import { FaShoppingCart, FaLeaf } from 'react-icons/fa';
import styles from './Navbar.module.css';

const Navbar = ({ onCartClick }) => {
  const { cart } = useCart();

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <header className={styles.navbar}>
      <div className={styles.logo}>
        <FaLeaf className={styles.icon} />
        <Link to="/" className={styles.brand}>Plantify</Link>
      </div>

      <nav className={styles.navLinks}>
        <Link to="/" className={styles.link}>Home</Link>
        <Link to="/shop" className={styles.link}>Shop</Link>
        <Link to="/cart" className={styles.link}>Cart</Link>
        <Link to="/about" className={styles.link}>About</Link>
        <Link to="/contact" className={styles.link}>Contact</Link>
        
      </nav>

      <div className={styles.cartIcon} onClick={onCartClick}>
        <FaShoppingCart size={22} />
        {cartCount > 0 && <span className={styles.badge}>{cartCount}</span>}
      </div>
    </header>
  );
};

export default Navbar;
