import React from "react";
import { Navigate } from "react-router-dom";
import { useAdminAuth } from "../../context/AdminAuthContext";

const ProtectedRoute = ({ children }) => {
  const { isAdminAuthenticated, loading } = useAdminAuth();
  
  console.log("ProtectedRoute - Auth status:", { isAdminAuthenticated, loading });

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-terracotta"></div>
      </div>
    );
  }

  const shouldRedirect = !isAdminAuthenticated;
  console.log("ProtectedRoute - Should redirect:", shouldRedirect);
  
  return isAdminAuthenticated ? children : <Navigate to="/admin/login" />;
};

export default ProtectedRoute;