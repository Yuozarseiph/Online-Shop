import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Auth = () => {
  const [activeTab, setActiveTab] = useState("login");
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const { login, register } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      if (!formData.email || !formData.password) {
        setError("Please fill out both fields.");
        return;
      }

      const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!emailPattern.test(formData.email)) {
        setError("Please enter a valid email.");
        return;
      }

      if (activeTab === "login") {
        await login(formData);
        navigate("/dashboard");
      } else {
        await register(formData);
        navigate("/dashboard");
      }
    } catch (error) {
      setError(error.message || "An error occurred, please try again.");
    }
  };

  return (
    <>
      <Header />
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

          {error && <div className="alert alert-danger">{error}</div>}

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
      <Footer />
    </>
  );
};

export default Auth;
