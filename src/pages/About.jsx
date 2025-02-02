// src/pages/About.js
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const About = () => {
    return (
      <>
          <Header/>
      <div className="container py-5">
            <h1 className="text-center">About Us</h1>
            <p className="text-muted">
                Welcome to our e-commerce store! We are dedicated to providing you with the best products and services.
            </p>
        </div>
          <Footer/>
      </>
        
    );
};

export default About;