// src/pages/Auth.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const Auth = () => {
    const [activeTab, setActiveTab] = useState("login"); // Track active tab (login or register)
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        confirmPassword: "",
    });

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        if (activeTab === "login") {
            console.log("Login Data:", formData);
            // Call login API here
        } else {
            console.log("Register Data:", formData);
            // Call register API here
        }
    };

    return (
        <>
        <div className="auth-page">
            {/* Tabs */}
            <div className="auth-tabs">
                <button
                    className={`auth-tab ${activeTab === "login" ? "active" : ""}`}
                    onClick={() => setActiveTab("login")}
                >
                    Login
                </button>
                <button
                    className={`auth-tab ${activeTab === "register" ? "active" : ""}`}
                    onClick={() => setActiveTab("register")}
                >
                    Register
                </button>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="auth-form">
                <h2>{activeTab === "login" ? "Login" : "Register"}</h2>

                {/* Email Field */}
                <div className="form-group">
                    <label>Email</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>

                {/* Password Field */}
                <div className="form-group">
                    <label>Password</label>
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                </div>

                {/* Confirm Password Field (only for Register) */}
                {activeTab === "register" && (
                    <div className="form-group">
                        <label>Confirm Password</label>
                        <input
                            type="password"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            required
                        />
                    </div>
                )}

                {/* Submit Button */}
                <button type="submit" className="btn btn-primary">
                    {activeTab === "login" ? "Login" : "Register"}
                </button>

                {/* Switch Tab Link */}
                <p className="switch-tab">
                    {activeTab === "login"
                        ? "Don't have an account? "
                        : "Already have an account? "}
                    <span
                        className="link"
                        onClick={() =>
                            setActiveTab(activeTab === "login" ? "register" : "login")
                        }
                    >
                        {activeTab === "login" ? "Register here" : "Login here"}
                    </span>
                </p>
            </form>
        </div>
        <Footer/>
        </>
    );
};

export default Auth;