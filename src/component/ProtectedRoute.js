// src/components/PrivateRoute.js

import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ element }) => {
  const isAuthenticated = useSelector((state) => state.pin.isAuthenticated);

  return isAuthenticated ? element : <Navigate to="/pin" />;
};

export default PrivateRoute;
