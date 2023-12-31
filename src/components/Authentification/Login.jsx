import React, { useContext, useEffect } from 'react';
import { useState } from 'react';
import InputBox from './inputBox';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from './Button';
import LayoutAuth from './LayoutAuth';
import { AuthContext } from '../../context/AuthContext';
export default function Login() {
  const { isAuthenticated, setIsAuthenticated, setUserData } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const validateForm = () => {
    if (!email) {
      setError('Please enter a email address');
      return false;
    }
    if (!password) {
      setError('Please enter a password');
      return false;
    }
    return true;
  };

  const login = async (email, password) => {
    // Make an API call to log in

    const data = {
      email,
      password,
    };
    try {
      const response = await fetch('/api/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
        credentials: 'include',
      });

      if (response.ok) {
        // Handle successful submission here
        // After successful login (based on API response), update the isAuthenticated state
        const userData = await response.json();
        setIsAuthenticated(true);
        setUserData(userData);
        navigate('/dashboard');
      } else {
        // Handle errors
        const errorMessage = await response.text();
        setError(errorMessage);
        setIsAuthenticated(false);
      }
    } catch (error) {
      console.error('Check out Login Error:', error);
      setError('Failed to connect to the server. Please try again later.');
      setIsAuthenticated(false);
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/dashboard');
    }
  }, [isAuthenticated]);
  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission
    if (!validateForm()) return;
    // Prepare data to be sent
    login(email, password);
  };
  return (
    <div>
      <LayoutAuth>
        <form onSubmit={handleSubmit}>
          <InputBox
            input={email}
            setInput={setEmail}
            property={'email'}
          ></InputBox>
          <InputBox
            input={password}
            setInput={setPassword}
            property={'pass'}
          ></InputBox>
          {error && <Warning error={error}></Warning>}
          <Button></Button>
        </form>
        <div className="text-center text-base font-medium">
          <span className="font-medium text-black mr-1">
            if you do not have an account you can
          </span>
          <Link to="/signup">
            <span className="font-bold text-indigo-500">Register here!</span>
          </Link>
        </div>
      </LayoutAuth>
    </div>
  );
}

export function Warning({ error }) {
  return (
    <div role="alert" className="alert alert-warning">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="stroke-current shrink-0 h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
        />
      </svg>
      <span>{error}</span>
    </div>
  );
}
