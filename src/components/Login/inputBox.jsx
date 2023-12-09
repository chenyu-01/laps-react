import React, { useState } from 'react';
import eyeIcon from './eyeIcon.svg';
import eyeSlash from './eyeSlash.svg';
import crossX from './crossX.svg';
export default function InputBox({ input, setInput, placeholder, property }) {
  const inputHandler = (event) => {
    const value = event.target.value;
    setInput(value);
  };

  const [hidden, setHidden] = useState(false);
  const eyeicon = hidden === false ? eyeSlash : eyeIcon;
  const toggleHide = (event) => {
    setHidden(!hidden);
  };
  const toggleClose = (event) => {
    setInput('');
  };
  return (
    <div className="bg-gray-100 self-stretch flex items-center justify-between gap-5 py-4 my-5 rounded-xl max-md:pr-5">
      <div className="text-zinc-600 text-lg font-medium leading-8 ml-4 tracking-widest grow whitespace-nowrap my-auto">
        <input
          type={hidden ? 'password' : 'text'}
          placeholder={placeholder}
          value={input}
          onChange={inputHandler}
          className="bg-transparent w-full focus:outline-none"
        />
      </div>
      {property === 'user' && (
        <img onClick={toggleClose} src={crossX} className="w-6 h-6 mx-4"></img>
      )}
      {property === 'pass' && (
        <img onClick={toggleHide} src={eyeicon} className="w-6 h-6 mx-4"></img>
      )}
    </div>
  );
}
