import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import axios from "axios";

const Checkout = () => {
  const { cartItems, removeFromCart } = useCart();
  const [userInfo, setUserInfo] = useState({
    name: "",
    address: "",
    phone: "",
    paymentMethod: "creditCard",
  });

  const [orderStatus, setOrderStatus] = useState(null);

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const orderData = {
      userInfo,
      items: cartItems,
      totalPrice,
    };

    try {
      const response = await axios.post(
        "http://localhost:5000/api/orders",
        orderData
      );

      console.log("Order placed successfully:", response.data);
      setOrderStatus("success");

      cartItems.forEach((item) => removeFromCart(item.id));
    } catch (error) {
      console.error("Error placing order:", error);
      setOrderStatus("error");
    }
  };

  return (
    <>
      <Header />
      <div className="checkout-page">
        <h2 className="text-center mb-4">Checkout</h2>

        {orderStatus === "success" && (
          <p className="text-center text-success">Order placed successfully!</p>
        )}
        {orderStatus === "error" && (
          <p className="text-center text-danger">
            Failed to place order. Try again.
          </p>
        )}

        <div className="checkout-form">
          <h4>User Information</h4>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Full Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={userInfo.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="address" className="form-label">
              Shipping Address
            </label>
            <input
              type="text"
              className="form-control"
              id="address"
              name="address"
              value={userInfo.address}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="phone" className="form-label">
              Phone Number
            </label>
            <input
              type="text"
              className="form-control"
              id="phone"
              name="phone"
              value={userInfo.phone}
              onChange={handleChange}
              required
            />
          </div>

          <h4>Payment Method</h4>
          <div className="mb-3">
            <select
              className="form-select"
              name="paymentMethod"
              value={userInfo.paymentMethod}
              onChange={handleChange}
            >
              <option value="creditCard">Credit Card</option>
              <option value="cashOnDelivery">Cash on Delivery</option>
            </select>
          </div>

          <h4>Order Summary</h4>
          <div className="order-summary">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="order-item d-flex justify-content-between"
              >
                <span>
                  {item.title} x {item.quantity}
                </span>
                <span>${(item.price * item.quantity).toFixed(2)}</span>
              </div>
            ))}
          </div>

          <div className="total-price mt-3">
            <h5>Total: ${totalPrice.toFixed(2)}</h5>
          </div>
          <div className="text-center mt-4">
            <button className="btn btn-success" onClick={handleSubmit}>
              Place Order
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Checkout;
