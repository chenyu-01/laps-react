import React, { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext(undefined);

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();
  const [userData, setUserData] = useState({});
  const checkAuthStatus = async () => {
    try {
      const response = await fetch(
        'http://localhost:8080/api/users/check-auth',
        {
          credentials: 'include',
        }
      );
      if (response.ok) {
        setIsAuthenticated(true);
        setUserData(await response.json());
        console.log('User is authenticated', response);
      } else {
        setIsAuthenticated(false);
        console.log('User is not authenticated', response);
        // navigate('/login'); // Redirect to login page if not authenticated
      }
    } catch (error) {
      console.error('Error checking authentication status:', error);
      setIsAuthenticated(false);
      // navigate('/login'); // Redirect to login page if not authenticated
    }
  };

  useEffect(() => {
    checkAuthStatus();
  }, []);

  const logout = async () => {
    try {
      const response = await fetch('http://localhost:8080/api/users/logout', {
        method: 'POST',
        credentials: 'include',
      });
      setIsAuthenticated(false);
      console.log('Logout successful', response);
      navigate('/login');
      // Redirect to login page or perform other actions
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  // ... in AuthProvider value

  return (
    <AuthContext.Provider
      value={{
        userData,
        isAuthenticated,
        setIsAuthenticated,
        logout,
        setUserData,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
