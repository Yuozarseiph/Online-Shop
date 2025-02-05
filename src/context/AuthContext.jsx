import React, { createContext, useState, useContext, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const mockUsers = JSON.parse(localStorage.getItem("mockUsers")) || [
    { email: "user1@example.com", password: "password123", name: "User One" },
    { email: "user2@example.com", password: "password456", name: "User Two" },
  ];


  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

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

  const register = (userData) => {
    const userExists = mockUsers.some((u) => u.email === userData.email);

    if (userExists) {
      alert("User already exists. Please login.");
    } else {
      const newUser = { ...userData, name: "New User" };
      mockUsers.push(newUser);
      localStorage.setItem("mockUsers", JSON.stringify(mockUsers));
      setUser(newUser);
      localStorage.setItem("user", JSON.stringify(newUser));
      alert("Registration successful!");
    }
  };

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
