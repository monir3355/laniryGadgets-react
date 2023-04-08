import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductCard from '../Cards/ProductCard';
import { addToCart } from '../../utilitics/fakeDb';
const Shop = () => {
  const products = useLoaderData();
  // console.log(products);
  const handleAddToCart = id =>{
    addToCart(id);
  }
  return (
    <div className='product-container'>
      {
        products.map(product=> <ProductCard key={product.id} product={product} handleAddToCart={handleAddToCart}></ProductCard>)
      }
    </div>
  );
};

export default Shop;