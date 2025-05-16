import { useState, useEffect } from 'react';

const API_KEY = 'your-trefle-token-here'; // Replace with your actual Trefle token

const usePlants = () => {
  const [plants, setPlants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPlants = async () => {
      try {
        const response = await fetch(`https://trefle.io/api/v1/plants?filter_not[image_url]=null&page=1`, {
          headers: {
            Authorization: `Bearer ${API_KEY}`,
          },
        });

        if (!response.ok) throw new Error('Failed to fetch');

        const data = await response.json();

        const mappedPlants = data.data.map((plant) => ({
          id: plant.id,
          name: plant.common_name || plant.scientific_name,
          description: `Scientific: ${plant.scientific_name} | Family: ${plant.family}`,
          price: 29.99,
          image: plant.image_url || '/assets/placeholder.jpg',
        }));

        setPlants(mappedPlants);
      } catch (err) {
        setError('Failed to fetch plant data');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchPlants();
  }, []);

  return { plants, loading, error };
};

export default usePlants;
