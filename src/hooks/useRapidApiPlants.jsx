import { useState, useEffect } from 'react';

const useRapidApiPlants = () => {
  const [plants, setPlants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPlants = async () => {
      try {
        const response = await fetch('https://house-plants2.p.rapidapi.com/all', {
          method: 'GET',
          headers: {
            'X-RapidAPI-Key': 'a9e32e6e3dmsh68c99d278809744p1dc8dejsn30ff52ffe671',
            'X-RapidAPI-Host': 'house-plants2.p.rapidapi.com',
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        // Map and normalize the data as per your UI needs
        const mappedPlants = data.map(plant => ({
          id: plant.id || plant.common_name,  // depends on API response structure
          name: plant.common_name || 'Unnamed Plant',
          description: plant.scientific_name || 'No description',
          price: 29.99,  // static price for demo
          image: plant.image_url || '/assets/placeholder.jpg',
        }));

        setPlants(mappedPlants);
      } catch (err) {
        setError(err.message || 'Failed to fetch plant data');
      } finally {
        setLoading(false);
      }
    };

    fetchPlants();
  }, []);

  return { plants, loading, error };
};

export default useRapidApiPlants;
