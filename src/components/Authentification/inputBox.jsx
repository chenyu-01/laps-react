import React, { useState } from 'react';
import eyeIcon from './eyeIcon.svg';
import eyeSlash from './eyeSlash.svg';
import crossX from './crossX.svg';

export default function InputBox({ input, setInput, property }) {
  const [hidden, setHidden] = useState(true);

  const inputHandler = (event) => {
    setInput(event.target.value);
  };

  const toggleHide = () => {
    setHidden(!hidden);
  };

  const toggleClean = () => {
    setInput('');
  };

  let icon, inputType, toggleMethod, placeholder;

  if (property === 'user') {
    // If it's a username or email field
    icon = crossX;
    inputType = 'text';
    toggleMethod = toggleClean;
    placeholder = 'Your Email';
  } else {
    // If it's a password field
    icon = hidden ? eyeIcon : eyeSlash;
    placeholder = 'Your Password';
    inputType = hidden ? 'password' : 'text';
    toggleMethod = toggleHide;
  }
  if (property === 'pass2') {
    placeholder = 'Confirm Password';
  }

  return (
    <div className="bg-gray-100 flex items-center justify-between px-3 py-4 my-5 rounded-xl">
      <div className="text-zinc-600 text-lg font-medium leading-8 mx-4 tracking-widest grow whitespace-nowrap my-auto">
        <input
          type={inputType}
          placeholder={placeholder}
          value={input}
          onChange={inputHandler}
          className="bg-transparent w-full focus:outline-none"
        />
      </div>
      <img
        onClick={toggleMethod}
        src={icon}
        alt="Icon"
        className="w-6 h-6 mx-4 cursor-pointer"
      />
    </div>
  );
}
