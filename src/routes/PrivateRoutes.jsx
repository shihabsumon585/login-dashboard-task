import React from 'react'
import { Navigate } from 'react-router';

const PrivateRoutes = ({children}) => {
    const isLoggedIn = localStorage.getItem("token");
    if (!isLoggedIn) {
        return <Navigate to="/login" replace />;
    }
    return children;
};
export default PrivateRoutes;

