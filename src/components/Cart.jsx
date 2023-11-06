import React, { useState } from 'react';

const Cart = () => {
  // Simulated cart data, replace with data from your application state
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      title: 'Movie 1',
      price: 9.99,
    },
    // Add more cart items as needed
  ]);

  // Calculate the total price
  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  const removeFromCart = (itemId) => {
    // Create a copy of the cart items without the item to be removed
    const updatedCart = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCart);
  };

  const addToCart = (newItem) => {
    // Add a new item to the cart
    setCartItems([...cartItems, newItem]);
  };

  return (
    <div className="cart">
      <h1>Shopping Cart</h1>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            {item.title} - ${item.price}
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <p>Total Price: ${totalPrice}</p>
      <button onClick={() => addToCart({ id: Date.now(), title: 'New Item', price: 19.99 })}>
        Add to Cart
      </button>
    </div>
  );
};

export default Cart;
