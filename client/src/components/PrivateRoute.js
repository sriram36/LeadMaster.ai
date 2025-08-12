import React from 'react';
import { Navigate } from 'react-router-dom';
import auth from '../services/authService';

const PrivateRoute = ({ children }) => {
    return auth.isAuthenticated() ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
