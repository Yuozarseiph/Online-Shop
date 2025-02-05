import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext"; // Import useCart
import Header from "../components/Header";
import Footer from "../components/Footer";

const Cart = () => {
  const { cartItems, addToCart, removeFromCart, decreaseQuantity } = useCart();

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleQuantityChange = (id, newQuantity) => {
    if (newQuantity <= 0) return;
    const item = cartItems.find((item) => item.id === id);
    if (item) {
      addToCart({ ...item, quantity: newQuantity });
    }
  };

  return (
    <>
    <Header/>
    <div className="cart-page">
      <h2 className="text-center mb-4">Shopping Cart</h2>
      {cartItems.length > 0 ? (
        <div className="cart-items">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="cart-item d-flex justify-content-between mb-3"
            >
              <div className="item-details d-flex">
                <img
                  src={item.image}
                  alt={item.title}
                  style={{ width: "50px", height: "50px", objectFit: "cover" }}
                  className="me-3"
                />
                <div>
                  <h5>{item.title}</h5>
                  <p>${item.price.toFixed(2)}</p>
                </div>
              </div>

              <div className="item-actions d-flex align-items-center">
                <button
                  className="btn btn-sm btn-secondary me-2"
                  onClick={() => decreaseQuantity(item.id)}
                >
                  -
                </button>

                <span className="quantity me-2">{item.quantity}</span>

                <button
                  className="btn btn-sm btn-secondary me-2"
                  onClick={() =>
                    handleQuantityChange(item.id, item.quantity + 1)
                  }
                >
                  +
                </button>

                <button
                  className="btn btn-sm btn-danger"
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

      <div className="cart-total mt-3">
        <h4>Total: ${totalPrice.toFixed(2)}</h4>
      </div>

      <div className="d-flex justify-content-between mt-4">
        <button
          className="btn btn-danger"
          onClick={() => cartItems.forEach((item) => removeFromCart(item.id))}
        >
          Empty Cart
        </button>
        <Link to="/checkout" className="btn btn-primary">
          Proceed to Checkout
        </Link>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Cart;
