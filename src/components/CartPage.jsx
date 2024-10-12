// src/components/CartPage.js
import React from 'react';

const CartPage = ({ cart, removeFromCart }) => {
  const totalPrice = cart.reduce((acc, product) => acc + product.price, 0);

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center border p-4 rounded-md shadow mb-4"
            >
              <span>{item.name}</span>
              <span>${item.price}</span>
              <button
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700"
                onClick={() => removeFromCart(item.id)}
              >
                Remove
              </button>
            </div>
          ))}
          <div className="mt-6">
            <h2 className="text-xl font-bold">Total: ${totalPrice}</h2>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
