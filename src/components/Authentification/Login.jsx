import * as React from 'react';
import { useState } from 'react';
import InputBox from './inputBox';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import LayoutAuth from './LayoutAuth';
export default function Login() {
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

  React.useEffect(() => {
    validateForm();
  }, [username, password]);

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission
    if (!validateForm()) return;
    // Prepare data to be sent
    const data = {
      username, // assuming these are state variables
      password,
    };

    try {
      const response = await fetch('api/test', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        // Handle successful submission here
        const responseData = await response.json();
        console.log('Login Successful:', responseData);
      } else {
        // Handle errors
        console.error('Login Failed');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
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
          <div
            className={`bg-red-100 text-red-700 text-center py-2 ${
              error ? 'block' : 'hidden'
            }`}
          >
            {error}
          </div>
          <Button error={error}></Button>
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
