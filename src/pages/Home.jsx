// src/pages/Home.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../components/Header";
import BannerSlider from "../components/BannerSlider"; // Import the BannerSlider
import ProductSection from "../components/ProductSection";
import Footer from "../components/Footer";

const Home = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Fetch products from API
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

    if (loading) return <p className="text-center">Loading products...</p>;
    if (error) return <p className="text-danger text-center">{error}</p>;

    return (
        <div>
            {/* Header */}
            <Header />

            {/* Banner Slider */}
            <BannerSlider />

            {/* Best Sellers Section */}
            <ProductSection title="Best Sellers" products={products.slice(0, 10)} />

            {/* New Arrivals Section */}
            <ProductSection title="New Arrivals" products={products.slice(0, 8)} />

            {/* On Sale Section */}
            <ProductSection title="On Sale" products={products.slice(5, 12)} />

            {/* Most Popular Section */}
            <ProductSection title="Most Popular" products={products.slice(3, 10)} />

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default Home;