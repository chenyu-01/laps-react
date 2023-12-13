import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
export default function DashBoard() {
  const { isAuthenticated } = useContext(AuthContext);
  return (
    <div>
      <h1>Dashboard To Test</h1>
      <h1>{isAuthenticated ? 'Authenticated' : 'Not Authenticated'}</h1>
    </div>
  );
}
