import { useLocation } from 'react-router-dom';
import React from 'react';
export function Button() {
  const location = useLocation();
  const buttonText = location.pathname === '/login' ? 'Login' : 'Register';
  // Destructure error from props
  return (
    <div>
      <button
        type="submit"
        className={`text-white text-xl font-bold tracking-widest whitespace-nowrap shadow-lg bg-indigo-500
        w-full self-stretch justify-center items-center mt-5 px-16 py-6 rounded-xl`}
      >
        <p className="text-center">{buttonText}</p>
      </button>
    </div>
  );
}
