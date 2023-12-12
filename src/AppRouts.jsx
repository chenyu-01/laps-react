// AppRoutes.jsx
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Login from './components/Authentification/Login';
import SignUp from './components/Authentification/SignUp';

const AppRoutes = () => {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<Navigate replace to="/login" />} />
        {/* ... other routes ... */}
      </Routes>
    </AuthProvider>
  );
};

export default AppRoutes;
