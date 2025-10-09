import React from "react";
import { Navigate } from "react-router-dom";

// Simulated authentication hook
function useAuth() {
  const user = { loggedIn: false }; // change to true to simulate login
  return user && user.loggedIn;
}

export default function ProtectedRoute({ children }) {
  const isAuthenticated = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return children;
}
