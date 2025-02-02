// src/context/AuthContext.js
import React, { createContext, useState, useContext } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null); // User state (null means not logged in)

    // Mock users (for testing purposes)
    const mockUsers = [
        { email: "user1@example.com", password: "password123", name: "User One" },
        { email: "user2@example.com", password: "password456", name: "User Two" },
    ];

    // Login function
    const login = (userData) => {
        const foundUser = mockUsers.find(
            (u) => u.email === userData.email && u.password === userData.password
        );

        if (foundUser) {
            setUser(foundUser);
            localStorage.setItem("user", JSON.stringify(foundUser));
            alert("Login successful!");
        } else {
            alert("Invalid email or password.");
        }
    };

    // Register function
    const register = (userData) => {
        const userExists = mockUsers.some((u) => u.email === userData.email);

        if (userExists) {
            alert("User already exists. Please login.");
        } else {
            const newUser = { ...userData, name: "New User" };
            mockUsers.push(newUser); // Add new user to mock list
            setUser(newUser);
            localStorage.setItem("user", JSON.stringify(newUser));
            alert("Registration successful!");
        }
    };

    // Logout function
    const logout = () => {
        setUser(null);
        localStorage.removeItem("user");
        alert("Logged out successfully!");
    };

    return (
        <AuthContext.Provider value={{ user, login, register, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};