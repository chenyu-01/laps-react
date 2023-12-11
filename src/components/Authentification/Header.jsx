import React from 'react';
import { Link } from 'react-router-dom';
import calendaricon from './calendar-icon.png';
export default function Header() {
  return (
    <div className="relative self-stretch md:px-3 w-full flex justify-between items-center max-w-[1440px]">
      <div className="justify-between items-start">
        <img
          src={calendaricon}
          alt="icon"
          className="w-10 h-10 md:hidden block"
        />
        <HeaderLeft>Leave Application Processing System</HeaderLeft>
      </div>
      <div className="self-stretch flex justify-between items-center">
        <HeaderRight>
          <Link to={'/login'}>Login</Link>
        </HeaderRight>
        <HeaderRight>
          <Link to={'/signup'}>Sign Up</Link>
        </HeaderRight>
      </div>
    </div>
  );
}

function HeaderRight({ children }) {
  return (
    <div className="text-indigo-500 text-xl font-bold tracking-wider whitespace-nowrap shadow-sm bg-white grow items-stretch py-3 px-4 rounded-3xl max-md:px-5">
      {children}
    </div>
  );
}

function HeaderLeft({ children }) {
  return (
    <div className="text-black font-medium text-xl tracking-wider self-stretch md:flex hidden">
      {children}
    </div>
  );
}
