import * as React from 'react';
import { useState } from 'react';
import InputBox from './inputBox';
import { Button } from './Button';
import { Link, useNavigate } from 'react-router-dom';
import LayoutAuth from './LayoutAuth';
import { Warning } from './Login';
export default function SignUp() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = () => {
    if (!validateEmail(email)) {
      setError('Please enter a valid email address');
      return false;
    }
    // Password check (basic example: check for non-empty and minimum length)
    if (!password) {
      if (password.length < 8) {
        setError('Password must be at least 8 characters long.');
      }
      if (password.length > 20) {
        setError('Password must be at most 20 characters long.');
      }
      return false;
    }

    if (password !== password2) {
      setError('Passwords do not match.');
      return false;
    }
    setError('');
    return true;
  };

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission
    if (!validateForm()) return false;
    // Prepare data to be sent
    const data = {
      name,
      role: 'User',
      email,
      password,
    };

    try {
      const response = await fetch('/api/users/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
        credentials: 'include',
      });

      if (response.ok) {
        // Handle successful submission here
        const responseData = await response.json();
        console.log('Signup Successful:', responseData);
        navigate('/login');
      } else {
        // Handle errors
        const errorMessage = await response.text();
        setError(errorMessage);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setError('Failed to connect to the server. Please try again later.');
    }
  };
  return (
    <div>
      <LayoutAuth>
        <form onSubmit={handleSubmit}>
          <div className="text-center text-3xl font-bold text-black">
            Sign Up As A New User
          </div>
          <InputBox
            input={name}
            setInput={setName}
            property={'user'}
          ></InputBox>
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
          <InputBox
            input={password2}
            setInput={setPassword2}
            property={'pass2'}
          />
          {error && <Warning error={error}></Warning>}
          <Button></Button>
        </form>

        <div className="text-center text-base font-medium mt-4">
          <span className="font-medium text-black">
            if you already have an account you can{' '}
          </span>
          <Link to="/login">
            <span className="font-bold text-indigo-500">Login here!</span>
          </Link>
        </div>
      </LayoutAuth>
    </div>
  );
}
