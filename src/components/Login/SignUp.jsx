import * as React from 'react';
import universityImage from './university.png';
import { useState } from 'react';
import InputBox from './inputBox';
export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
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
    if (password !== password2) {
      setError('Passwords do not match.');
      return false;
    }
    setError('');
    return true;
  };

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
    <div className="">
      <div className="flex w-full flex-col mb-40 items-start max-md:max-w-full max-md:my-10">
        <div className="self-stretch flex items-stretch justify-between gap-5 mt-20 max-md:max-w-full max-md:flex-wrap">
          <img
            loading="lazy"
            srcSet={universityImage}
            className="aspect-[1.18] object-contain object-center w-full overflow-hidden grow basis-[0%] max-md:max-w-full"
          />
          <div className="self-center flex grow basis-[0%] flex-col items-center my-auto">
            <form onSubmit={handleSubmit}>
              <InputBox
                input={username}
                setInput={setUsername}
                placeholder={'Your Email'}
                property={'user'}
                validation={validateForm}
              ></InputBox>
              <InputBox
                input={password}
                setInput={setPassword}
                placeholder={'Your Password'}
                property={'pass'}
                validation={validateForm}
              ></InputBox>
              <InputBox
                input={password}
                setInput={setPassword2}
                placeholder={'Your Password'}
                property={'pass'}
                validation={validateForm}
              />
              <div
                className={`bg-red-100 text-red-700 text-center py-1 ${
                  error ? 'block' : 'hidden'
                }`}
              >
                Error: {error}
              </div>
              <button type="submit" className="w-full" disabled={error}>
                <div
                  className={`text-white text-xl font-bold tracking-widest whitespace-nowrap shadow-lg ${
                    error ? 'bg-gray-300' : 'bg-green-400'
                  } self-stretch justify-center items-center mt-10 px-16 py-6 rounded-xl max-md:mt-10 max-md:px-5`}
                >
                  <p className="text-center">Register</p>
                </div>
              </button>
            </form>

            <div className="text-center text-base font-medium mt-4">
              <span className="font-medium text-black">
                if you already have an account you can{' '}
              </span>
              <span className="font-bold text-indigo-500">Login here!</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
