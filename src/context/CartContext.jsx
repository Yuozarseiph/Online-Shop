// src/context/CartContext.js
import React, { createContext, useState, useContext } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]); // State for cart items

    // Add a product to the cart
    const addToCart = (product) => {
        console.log("Adding product to cart:", product); // Debugging
        const existingItem = cartItems.find((item) => item.id === product.id);
        if (existingItem) {
            // If the product already exists, increase its quantity
            setCartItems(
                cartItems.map((item) =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                )
            );
        } else {
            // If the product is new, add it to the cart
            setCartItems([...cartItems, { ...product, quantity: 1 }]);
        }
    };

    // Remove a product from the cart
    const removeFromCart = (id) => {
        setCartItems(cartItems.filter((item) => item.id !== id));
    };

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    return useContext(CartContext);
};