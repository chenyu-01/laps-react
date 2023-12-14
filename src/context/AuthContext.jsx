import React, { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();
  const [userData, setUserData] = useState({});
  useEffect(() => {
    const checkAuthStatus = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/check-auth', {
          credentials: 'include',
        });
        if (response.ok) {
          setIsAuthenticated(true);
        } else {
          setIsAuthenticated(false);
          navigate('/login');
        }
      } catch (error) {
        console.error('Error checking authentication status:', error);
        setIsAuthenticated(false);
        navigate('/login');
      }
    };

    checkAuthStatus();
  }, []);

  const logout = async () => {
    try {
      await fetch('http://localhost:8080/api/logout', {
        method: 'POST',
        credentials: 'include',
      });
      setIsAuthenticated(false);
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
