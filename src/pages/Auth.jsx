// src/pages/Auth.js
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Auth = () => {
  const [activeTab, setActiveTab] = useState("login");
  const [formData, setFormData] = useState({ email: "", password: "" });
  const { login, register } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (activeTab === "login") {
        await login(formData);
        navigate("/dashboard");
      } else {
        await register(formData);
        navigate("/dashboard");
      }
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  return (
    <div className="auth-page">
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

      <form onSubmit={handleSubmit} className="auth-form">
        <h2>{activeTab === "login" ? "Login" : "Register"}</h2>

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

        <button type="submit" className="btn btn-primary">
          {activeTab === "login" ? "Login" : "Register"}
        </button>

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
  );
};

export default Auth;
