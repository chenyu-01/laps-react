import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext.jsx';
export default function DashBoard() {
  const { isAuthenticated, logout, userData } = useContext(AuthContext);
  return (
    <div>
      <h1>Dashboard To Test</h1>
      <h1>{isAuthenticated ? 'Authenticated' : 'Not Authenticated'}</h1>
      <button
        className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg"
        onClick={logout}
      >
        Logout
      </button>
      <div>Role: {userData.role}</div>
      <div>User: {userData.name}</div>
      <div>Email: {userData.email}</div>
    </div>
  );
}
