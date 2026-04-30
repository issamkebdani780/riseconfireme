import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const location = useLocation();
  
  // Verify authentication by checking for the user's token or profile
  const isAuthenticated = !!localStorage.getItem('userName') || !!localStorage.getItem('token');

  if (!isAuthenticated) {
    // Redirect to the login page, but save the current location they were trying to access
    return <Navigate to="/signin" state={{ from: location }} replace />;
  }

  return children;
};

export default ProtectedRoute;
