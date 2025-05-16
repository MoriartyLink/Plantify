import React from 'react';
import { useParams } from 'react-router-dom';
import plantProducts from '../data/plantProducts'; // adjust path as needed
import  './ProductDetail.module.css'; // adjust path as needed

const ProductDetail = () => {
  const { id } = useParams();
  const product = plantProducts.find(p => p.id === parseInt(id));

  if (!product) {
    return <p>Product not found.</p>;
  }

  return (
    <div className="product-detail">
      <img src={product.image} alt={product.name} />
      <div className="detail-info">
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <p>${product.price}</p>
      </div>
    </div>
  );
};

export default ProductDetail;
