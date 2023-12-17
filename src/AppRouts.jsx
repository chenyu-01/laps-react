// AppRoutes.jsx
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Login from './components/Authentification/Login';
import SignUp from './components/Authentification/SignUp';
import Approval from './components/Approval/Approval';
import Admin from './components/Admin/Admin';
import Profile from './components/Profile/Profile.jsx';
import LeaveHistory from './components/LeaveHistory/LeaveHistory';
import TestLayout from './components/Test/TestLayout.jsx';

const AppRoutes = () => {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/Admin" element={<Admin />} />
        <Route path="/Approval" element={<Approval />} />
        <Route path="/" element={<Navigate replace to="/login" />} />
        <Route path="/dashboard" element={<TestLayout />} />
        <Route path="/test-dashboard" element={<Profile />} />
        <Route path="/leavehistory" element={<LeaveHistory />} />
        {/* ... other routes ... */}
      </Routes>
    </AuthProvider>
  );
};

export default AppRoutes;
