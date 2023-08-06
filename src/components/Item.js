import React, { useState } from "react";

function Item({ name, category }) {
const [addToCart, setAddToCart] = useState(false)

function handleAddToCart(){
  setAddToCart(!addToCart)
  console.log(addToCart)
}

// const cartTextToggle = !addToCart ? "Add to cart" : "Item in cart"

  return (
    <li className={addToCart ? ".in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button 
      onClick={handleAddToCart} 
      className={addToCart ? "in-cart" : "add"}
      >Add to Cart</button>
    </li>
  );
}

export default Item;
