import React, { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    const checkAuthStatus = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/check-auth', {
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
      } finally {
        setIsLoading(false);
      }
    };

    checkAuthStatus();
  }, []);

  const logout = async () => {
    try {
      await fetch('http://localhost:3000/api/logout', {
        method: 'POST',
        credentials: 'include',
      });
      setIsAuthenticated(false);
      // Redirect to login page or perform other actions
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  const login = async (username, password) => {
    // Make an API call to log in

    setIsLoading(true);
    // await new Promise((resolve) => setTimeout(resolve, 1000));  // For now, let's simulate it with a timeout
    const data = {
      username,
      password,
    };

    try {
      const response = await fetch('http://localhost:3000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
        credentials: 'include',
      });

      const responseData = await response.json();

      if (response.ok) {
        // Handle successful submission here
        // After successful login (based on API response), update the isAuthenticated state
        console.log('Login Successful:', responseData);
        setIsAuthenticated(true);
        navigate('/dashboard');
      } else {
        // Handle errors
        console.error('Login Failed:', responseData);
        setIsAuthenticated(false);
      }
    } catch (error) {
      console.error('Check out Login Error:', error);
      setIsAuthenticated(false);
    } finally {
      setIsLoading(false);
    }
  };

  // ... in AuthProvider value

  return (
    <AuthContext.Provider value={{ isAuthenticated, isLoading, logout, login }}>
      {children}
    </AuthContext.Provider>
  );
};