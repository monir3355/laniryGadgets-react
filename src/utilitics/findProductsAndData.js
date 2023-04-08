// fetch data and get the localStorage data and find data with id the it call from react router dom
import { getShoppingCart } from "./fakeDb";

const productsAndData = async() =>{
  const productsData = await fetch('products.json');
  const products = await productsData.json();
  const storedCart = getShoppingCart();
  const newCart = [];
  for(let id in storedCart) {
    const foundProduct = products.find(pd=>pd.id === id);
    if(foundProduct){
      foundProduct.quantity = storedCart[id];
      newCart.push(foundProduct);
    }
  }
  return {newCart, products}
}
export {productsAndData}