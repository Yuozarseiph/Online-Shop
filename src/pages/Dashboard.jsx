// src/pages/Dashboard.js
import React from "react";
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Dashboard = () => {
  const { user, logout } = useAuth();

  if (!user) {
    return <p>You are not authorized to view this page.</p>;
  }

  return (
    <>
      <Header />
      <div className="dashboard-page m-5 text-center">
        <h2>Welcome, {user.email}!</h2>
        <p>This is your dashboard.</p>
        <div className="d-flex flex-column flex-lg-row align-items-center gap-2">
          <button className="btn btn-danger m-1" onClick={logout}>
            Logout
          </button>
          <Link className="btn btn-primary m-1" to={"/"}>
            Back to Home
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Dashboard;
