import React from 'react';
import useRapidApiPlants from '../hooks/useRapidApiPlants';
import ProductCard from '../components/ProductCard';
import styles from './Shop.module.css';

const Shop = () => {
  const { plants, loading, error } = useRapidApiPlants();

  if (loading) return <p>Loading plants...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className={styles.shopContainer}>
      <h1 className={styles.shopHeading}>Shop All Plants</h1>
      <p className={styles.subtext}>Carefully selected houseplants to bring greenery to any space.</p>

      <div className={styles.masonryGrid}>
        {plants.map((plant) => (
          <div key={plant.id} className={styles.gridItem}>
            <ProductCard product={plant} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
