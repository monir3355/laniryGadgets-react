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

export { addToCart };
