// src/components/ProductPage.js
import React from 'react';

const ProductPage = ({ products, addToCart }) => {
  return (
    <div className="p-4 bg-sky-500">
      <h1 className="text-3xl font-bold mb-6">Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="border p-4 rounded-md shadow">
            <img 
               src= {product.images}
               
              alt={product.name} 
              className="w-full h-48 object-cover mb-4"
            />
            
             
            <h2 className="text-xl font-semibold">{product.name}</h2>
            <p className="text-gray-700">Price: ${product.price}</p>
            <button
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
              onClick={() => addToCart(product)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
