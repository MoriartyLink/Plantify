import React from 'react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import styles from './ProductCard.module.css'; // ✅ Fixed import

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className={styles.productCard}>
      <Link to={`/product/${product.id}`} className={styles.imageContainer}>
            <img 
            src={product.image} 
            alt={product.name} 
            className="product-image"
            loading="lazy"
            />

        <div className={styles.hoverOverlay}></div>
      </Link>
      <div className={styles.productDetails}>
        <div className={styles.textContent}>
          <Link to={`/product/${product.id}`}>
            <h3 className={styles.productTitle}>{product.name}</h3>
          </Link>
          <p className={styles.productDescription}>{product.description}</p>
        </div>
        <div className={styles.productFooter}>
          <span className={styles.productPrice}>${product.price.toFixed(2)}</span>
          <button 
            onClick={() => addToCart(product)}
            className={styles.addToCartBtn}
            aria-label={`Add ${product.name} to cart`}
          >
            <span>Add to Cart</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
