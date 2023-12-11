import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
export default function Header() {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };
  return (
    <div className="relative self-stretch w-full flex justify-between items-center max-w-[1396px]">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6 md:hidden cursor-pointer"
        onClick={toggleDropdown}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
        />
      </svg>
      {isDropdownVisible && <DropdownMenu />}
      <nav className="md:flex hidden justify-between gap-5 items-start ">
        <HeaderLeft>
          <Link>Dashboard</Link>
        </HeaderLeft>
        <HeaderLeft>
          <Link>History</Link>
        </HeaderLeft>
        <HeaderLeft>
          <Link>Admi</Link>
        </HeaderLeft>
      </nav>
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
    <div className="text-indigo-500 text-lg font-bold tracking-wider whitespace-nowrap shadow-sm bg-white grow items-stretch py-3 px-4 rounded-3xl max-md:px-5">
      {children}
    </div>
  );
}

function HeaderLeft({ children }) {
  return (
    <div className="text-black text-lg font-medium tracking-wider self-stretch">
      {children}
    </div>
  );
}

function DropdownMenu() {
  return (
    <div className="text-center flex flex-col absolute max-w-[1396px] bg-gray-50 divide-y divide-gray-400 shadow-md rounded-xl top-[50px] md:hidden w-full">
      <div className="py-3">
        <HeaderLeft>
          <Link to="/dashboard">
            <p className="w-full">Dashboard</p>
          </Link>
        </HeaderLeft>
      </div>
      <div className="py-3">
        <HeaderLeft>
          <Link to="/history">
            <p className="w-full">History</p>
          </Link>
        </HeaderLeft>
      </div>
      <div className="py-3">
        <HeaderLeft>
          <Link to="/admin">
            <p className="w-full">Admin</p>
          </Link>
        </HeaderLeft>
      </div>
    </div>
  );
}
