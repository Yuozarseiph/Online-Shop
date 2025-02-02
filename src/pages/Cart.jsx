// src/pages/Cart.js
import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext"; // Import useCart

const Cart = () => {
    const { cartItems, removeFromCart, updateQuantity } = useCart(); // Access cart state and functions

    // Calculate total price
    const totalPrice = cartItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
    );

    return (
        <div className="cart-page">
            <h2 className="text-center mb-4">Shopping Cart</h2>

            {/* Display cart items */}
            {cartItems.length > 0 ? (
                <div className="cart-items">
                    {cartItems.map((item) => (
                        <div key={item.id} className="cart-item">
                            <div className="item-details">
                                <h5>{item.title}</h5>
                                <p>${item.price.toFixed(2)}</p>
                            </div>
                            <div className="item-actions">
                                <button
                                    className="btn btn-sm btn-outline-secondary"
                                    onClick={() =>
                                        updateQuantity(item.id, item.quantity - 1)
                                    }
                                >
                                    -
                                </button>
                                <span className="quantity">{item.quantity}</span>
                                <button
                                    className="btn btn-sm btn-outline-secondary"
                                    onClick={() =>
                                        updateQuantity(item.id, item.quantity + 1)
                                    }
                                >
                                    +
                                </button>
                                <button
                                    className="btn btn-sm btn-danger ms-2"
                                    onClick={() => removeFromCart(item.id)}
                                >
                                    Remove
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <p className="text-center">Your cart is empty.</p>
            )}

            {/* Total price */}
            <div className="cart-total">
                <h4>Total: ${totalPrice.toFixed(2)}</h4>
            </div>

            {/* Checkout button */}
            <div className="text-center mt-4">
                <Link to="/checkout" className="btn btn-primary">
                    Proceed to Checkout
                </Link>
            </div>
        </div>
    );
};

export default Cart;