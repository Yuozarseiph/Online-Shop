// src/components/ProductSection.js
import React from "react";
import ProductCard from "./ProductCard";

const ProductSection = ({ title, products }) => {
  return (
    <section className="product-section py-5">
      <div className="container">
        <h2 className="section-title text-center mb-4">{title}</h2>
        <div className="horizontal-scroll">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
