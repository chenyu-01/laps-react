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
  switch (property) {
    case 'email':
      icon = crossX;
      inputType = 'email';
      toggleMethod = toggleClean;
      placeholder = 'Email';
      break;
    case 'pass':
      icon = hidden ? eyeIcon : eyeSlash;
      inputType = hidden ? 'password' : 'text';
      toggleMethod = toggleHide;
      placeholder = 'Password';
      break;
    case 'user':
      icon = crossX;
      inputType = 'text';
      toggleMethod = toggleClean;
      placeholder = 'Name';
      break;
    case 'pass2':
      icon = hidden ? eyeIcon : eyeSlash;
      inputType = hidden ? 'password' : 'text';
      toggleMethod = toggleHide;
      placeholder = 'Confirm Password';
      break;
    default:
      icon = crossX;
      inputType = 'text';
      toggleMethod = toggleClean;
      placeholder = 'Name';
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
