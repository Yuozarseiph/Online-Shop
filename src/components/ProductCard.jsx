// src/components/ProductCard.js
import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const ProductCard = ({ product }) => {
    const { addToCart } = useCart();

    console.log("addToCart in ProductCard:", addToCart);

    return (
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
            <div className="card h-100 shadow-sm">
                <img
                    src={product.image}
                    alt={product.title}
                    className="product-image"
                />
                <div className="card-body d-flex flex-column">
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-text text-success fw-bold">${product.price}</p>
                    <p className="card-text text-muted">
                        {product.description.slice(0, 60)}...
                    </p>
                    <div className="mb-2">
                        <span className="badge bg-warning text-dark">
                            ⭐ {product.rating.rate} ({product.rating.count})
                        </span>
                    </div>
                    <button
                        className="btn btn-primary mt-auto"
                        onClick={() => {
                            console.log("Button clicked, adding product:", product);
                            addToCart(product);
                        }}
                    >
                        Add to Cart
                    </button>
                    <Link
                        to={`/product/${product.id}`}
                        className="btn btn-outline-secondary mt-2"
                    >
                        View Product
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;