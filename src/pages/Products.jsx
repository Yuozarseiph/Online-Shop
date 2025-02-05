// src/pages/Products.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setProducts(response.data);
        setLoading(false);
      } catch (err) {
        setError("Failed to load products. Please try again later.");
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
    <Header/>
    <div className="container py-5">
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search products..."
          className="form-control"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {loading && <p className="text-center">Loading products...</p>}

      {error && <p className="text-danger text-center">{error}</p>}

      <div className="row">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={() => {}}
            />
          ))
        ) : (
          <p className="text-center">No products found.</p>
        )}
      </div>
    </div>
    <Footer/>
    </>
    
  );
};

export default Products;
