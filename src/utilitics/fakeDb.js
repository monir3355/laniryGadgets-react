const addToCart = (id) => {
  let shoppingCart = {};
  // get the local Storage value
  const storedCart = localStorage.getItem("shopping-cart");
  // set shopping cart
  if (storedCart) {
    shoppingCart = JSON.parse(storedCart);
  }
  // get quantity value
  const quantity = shoppingCart[id];
  if (quantity) {
    const newQuantity = quantity + 1;
    shoppingCart[id] = newQuantity;
  }
  // if no value the set the value as 1
  else {
    shoppingCart[id] = 1;
  }
  localStorage.setItem("shopping-cart", JSON.stringify(shoppingCart));
};

const getShoppingCart = () => {
  let shoppingCart = {};
  const storedCart = localStorage.getItem("shopping-cart");
  if (storedCart) {
    shoppingCart = JSON.parse(storedCart);
  }
  return shoppingCart;
};
const removeFromDB = (id) => {
  const storedCart = localStorage.getItem("shopping-cart");
  if (storedCart) {
    const shoppingCart = JSON.parse(storedCart);
    if (id in shoppingCart) {
      delete shoppingCart[id];
      localStorage.setItem("shopping-cart", JSON.stringify(shoppingCart));
    }
  }
};

const ClearFromDB=()=>{
  localStorage.removeItem("shopping-cart");
}

export { addToCart, getShoppingCart, removeFromDB, ClearFromDB };
