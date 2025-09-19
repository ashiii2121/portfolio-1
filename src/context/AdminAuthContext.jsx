import React, { createContext, useContext, useState, useEffect } from "react";

const AdminAuthContext = createContext();

export const useAdminAuth = () => {
  const context = useContext(AdminAuthContext);
  if (!context) {
    throw new Error("useAdminAuth must be used within an AdminAuthProvider");
  }
  return context;
};

export const AdminAuthProvider = ({ children }) => {
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if admin is already authenticated
    const authStatus = localStorage.getItem("adminAuthenticated");
    console.log("Checking admin auth status:", authStatus);
    if (authStatus === "true") {
      setIsAdminAuthenticated(true);
    }
    setLoading(false);
  }, []);

  const login = (password) => {
    // In a real application, this would be a proper authentication
    // For this demo, we'll use a simple password check
    const adminPassword = import.meta.env.VITE_ADMIN_PASSWORD || "admin123";
    
    console.log("Comparing passwords:", { input: password, expected: adminPassword });
    
    if (password === adminPassword) {
      setIsAdminAuthenticated(true);
      localStorage.setItem("adminAuthenticated", "true");
      console.log("Login successful");
      return true;
    }
    console.log("Login failed");
    return false;
  };

  const logout = () => {
    console.log("Logging out");
    setIsAdminAuthenticated(false);
    localStorage.removeItem("adminAuthenticated");
  };

  const value = {
    isAdminAuthenticated,
    login,
    logout,
    loading,
  };

  return (
    <AdminAuthContext.Provider value={value}>
      {children}
    </AdminAuthContext.Provider>
  );
};