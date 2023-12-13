import React, { useContext } from 'react';
import { useState } from 'react';
import InputBox from './inputBox';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import LayoutAuth from './LayoutAuth';
import { AuthContext } from '../../context/AuthContext';
export default function Login() {
  const { isAuthenticated, login } = useContext(AuthContext);
  if (isAuthenticated) {
    window.location.href = '/dashboard';
  }
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = () => {
    if (!validateEmail(username)) {
      setError('Please enter a valid email address');
      return false;
    }
    // Password check (basic example: check for non-empty and minimum length)
    if (!password || password.length < 6) {
      setError('Password must be at least 6 characters long.');
      return false;
    }
    setError('');
    return true;
  };

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission
    if (!validateForm()) return;
    // Prepare data to be sent
    login(username, password);
  };
  return (
    <div>
      <LayoutAuth>
        <form onSubmit={handleSubmit}>
          <InputBox
            input={username}
            setInput={setUsername}
            property={'user'}
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
      <span>Warning: {error}</span>
    </div>
  );
}
