import * as React from 'react';
import universityImage from './university.png';
import { useState } from 'react';
import InputBox from './inputBox';
import Header from '../Header';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('init');
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
    <div className="">
      <Header></Header>
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
                property={'user'}
              ></InputBox>
              <InputBox
                input={password}
                setInput={setPassword}
                property={'pass'}
              ></InputBox>
              <div
                className={`bg-red-100 text-red-700 text-center my-1 ${
                  error !== 'init' ? 'block' : 'hidden'
                }`}
              >
                {error}
              </div>
              <Button error={error}></Button>
            </form>
            <div className="text-zinc-500 text-center text-base font-bold leading-[77px] tracking-widest max-w-[400px] mt-6">
              Forget Password ?
            </div>
            <div className="text-center text-base font-medium mt-4">
              <span className="font-medium text-black mr-1">
                if you do not have an account you can
              </span>
              <Link to="/signup">
                <span className="font-bold text-indigo-500">
                  Register here!
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Button({ error }) {
  const location = useLocation();
  const buttonText = location.pathname === '/login' ? 'Sign In' : 'Register';
  // Destructure error from props
  return (
    <div>
      <button
        type="submit"
        className={`text-white text-xl font-bold tracking-widest whitespace-nowrap shadow-lg ${
          error && error !== 'init' ? 'bg-gray-300' : 'bg-indigo-500'
        } w-full self-stretch justify-center items-center mt-10 px-16 py-6 rounded-xl`}
        disabled={!!error && error !== 'init'} // Disable button if error is set and not equal to 'init'
      >
        <p className="text-center">{buttonText}</p>
      </button>
    </div>
  );
}
