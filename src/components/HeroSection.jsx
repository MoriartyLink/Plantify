import React from 'react';
import styles from './HeroSection.module.css';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.floatingLeaves}></div>
      
      <div className={styles.content}>
        <h1 className={styles.title}>Bring Nature Into Your Living Space</h1>
        <p className={styles.subtitle}>
          Discover our collection of easy-care houseplants that purify your air and elevate your home's aesthetic
        </p>
        <a href="/shop" className={styles.btnPrimary}>
          Explore Collection
        </a>
      </div>
      
      <div className={styles.plantContainer}>
        <img 
          src="src/assets/plant_image.png" 
          alt="Houseplant" 
          className={styles.plantImage}
        />
      </div>
    </section>
  );
};

export default HeroSection;
