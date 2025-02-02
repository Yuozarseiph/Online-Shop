// src/components/ProductItem.js
import React from 'react';

const ProductItem = ({ product, addToCart }) => {
    return (
        <div className="product-item">
            <img src={product.image} alt={product.title} />
            <h2>{product.title}</h2>
            <p>${product.price}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
    );
};

export default ProductItem;