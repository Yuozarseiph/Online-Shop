// src/pages/Dashboard.js
import React from "react";
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";

const Dashboard = () => {
    const { user, logout } = useAuth();

    if (!user) {
        return <p>You are not authorized to view this page.</p>;
    }

    return (
        <div className="dashboard-page">
            <h2>Welcome, {user.email}!</h2>
            <p>This is your dashboard.</p>
            <button className="btn btn-danger" onClick={logout}>
                Logout
            </button>
            <Link className="btn btn-primary" to={"/"}>Back to Home</Link>
        </div>
    );
};

export default Dashboard;