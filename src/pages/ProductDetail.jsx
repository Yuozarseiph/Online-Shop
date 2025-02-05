import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useCart } from "../context/CartContext"; // Import useCart

const ProductDetail = () => {
  const { id } = useParams(); // Get product ID from URL
  const { addToCart } = useCart(); // Access addToCart function from context
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `https://fakestoreapi.com/products/${id}`
        );
        setProduct(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching product:", error);
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) return <p className="text-center">Loading product details...</p>;
  if (!product)
    return <p className="text-center text-danger">Product not found!</p>;

  return (
    <>
      <Header />
      <div className="container py-5">
        <div className="row">
          <div className="col-md-6">
            <img
              src={product.image}
              alt={product.title}
              className="img-fluid"
            />
          </div>
          <div className="col-md-6">
            <h2>{product.title}</h2>
            <p className="text-success fw-bold">${product.price}</p>
            <p>{product.description}</p>
            <button
              className="btn btn-primary mt-auto"
              onClick={() => {
                console.log("Button clicked, adding product:", product);
                addToCart(product); // Add product to cart
              }}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductDetail;
