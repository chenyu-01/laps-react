import { useLocation } from 'react-router-dom';
import React from 'react';
export function Button({ error }) {
  const location = useLocation();
  const buttonText = location.pathname === '/login' ? 'Sign In' : 'Register';
  // Destructure error from props
  return (
    <div>
      <button
        type="submit"
        className={`text-white text-xl font-bold tracking-widest whitespace-nowrap shadow-lg ${
          error ? 'bg-gray-300' : 'bg-indigo-500'
        } w-full self-stretch justify-center items-center mt-5 px-16 py-6 rounded-xl`}
        disabled={error} // Disable button if error is set and not equal to 'init'
      >
        <p className="text-center">{buttonText}</p>
      </button>
    </div>
  );
}
