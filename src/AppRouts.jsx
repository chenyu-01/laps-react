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
import LeaveModify from './components/LeaveHistory/LeaveModify.jsx';
import Dashboard from './components/Dashboard/Dashboard.jsx';

const AppRoutes = () => {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/Admin" element={<Admin />} />
        <Route path="/Approval" element={<Approval />} />
        <Route path="/" element={<Navigate replace to="/login" />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/leavehistory" element={<LeaveHistory />} />
        <Route path="/leave-modify/:leaveId" element={<LeaveModify />} />

        {/* ... other routes ... */}
      </Routes>
    </AuthProvider>
  );
};

export default AppRoutes;
