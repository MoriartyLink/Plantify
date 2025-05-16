import React, { useState, useEffect } from 'react';
import styles from './CategorySection.module.css';

const CategorySection = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        // Example categories mapped to your queries
        const categoryQueries = [
          { name: 'Indoor Plants', endpoint: 'indoor' },
          { name: 'Outdoor Plants', endpoint: 'outdoor' },
          { name: 'Succulents', endpoint: 'succulent' },
          { name: 'Fruits & Vegetables', endpoint: 'edible' },
          { name: 'Herbs', endpoint: 'herb' },
          { name: 'Flowering Plants', endpoint: 'flowering' },
        ];

        const fetchedCategories = [];

        for (const category of categoryQueries) {
          // Use the actual RapidAPI URL and queries below
          const response = await fetch(`https://house-plants2.p.rapidapi.com/${category.endpoint}`, {
            method: 'GET',
            headers: {
              'X-RapidAPI-Key': 'a9e32e6e3dmsh68c99d278809744p1dc8dejsn30ff52ffe671',
              'X-RapidAPI-Host': 'house-plants2.p.rapidapi.com',
            },
          });

          if (!response.ok) {
            throw new Error(`Failed to fetch category ${category.name}: ${response.status}`);
          }

          const data = await response.json();

          // Take first plant with image from response or fallback
          const plantWithImage = data.find(plant => plant.image_url);

          if (plantWithImage) {
            fetchedCategories.push({
              name: category.name,
              image: plantWithImage.image_url,
              id: plantWithImage.id || plantWithImage.common_name,
            });
          } else {
            fetchedCategories.push({
              name: category.name,
              image: '/images/plant-placeholder.jpg',
              id: category.name.toLowerCase().replace(/\s+/g, '-'),
            });
          }
        }

        setCategories(fetchedCategories);
      } catch (err) {
        console.error(err);
        setError('Error fetching plant categories');
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  if (loading) return <p>Loading categories...</p>;
  if (error) return <p>{error}</p>;

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.title}>Discover Our Plant Categories</h2>
        <p className={styles.subtitle}>Find your perfect green companion</p>
      </div>

      <div className={styles.grid}>
        {categories.map((category) => (
          <div key={category.id} className={styles.card}>
            <div className={styles.imageContainer}>
              <img src={category.image} alt={category.name} className={styles.image} loading="lazy" />
              <div className={styles.overlay}></div>
            </div>
            <h3 className={styles.name}>{category.name}</h3>
            <button className={styles.exploreBtn}>Explore</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategorySection;
