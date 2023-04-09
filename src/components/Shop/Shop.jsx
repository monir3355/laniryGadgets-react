import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductCard from '../Cards/ProductCard';
import { addToCart } from '../../utilitics/fakeDb';
import { CartContext, ProductsContext } from '../../App';
import { toast } from 'react-hot-toast';
const Shop = () => {
  // const products = useLoaderData();
  const products = useContext(ProductsContext);
  const [cart, setCart] = useContext(CartContext);
  const handleAddToCart = product =>{
    let newCart = [];
    const exists = cart.find(pd=>pd.id === product.id)
    if(exists){
      const remainingProduct = cart.filter(pd=>pd.id !== product.id);
      if(remainingProduct){
        remainingProduct.quantity = remainingProduct.quantity + 1;
        newCart = [...remainingProduct, exists];
      }
    }
    else{
      product.quantity = 1;
      newCart = [...cart, product];
    }
    setCart(newCart);
    addToCart(product.id);
    toast.success("Product Added 👍");
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