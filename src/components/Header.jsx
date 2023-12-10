import React from 'react';
import { Link } from 'react-router-dom';
export default function Header() {
  return (
    <div className="self-stretch md:flex w-full justify-between items-center hidden">
      <nav className="flex justify-between gap-5 items-start ">
        <div className="text-black text-lg font-medium tracking-wider whitespace-nowrap">
          Dashboard
        </div>
        <div className="text-black text-lg font-medium tracking-wider self-stretch">
          History
        </div>
        <div className="text-black text-lg font-medium tracking-wider self-stretch">
          Admin Management
        </div>
        <div className="text-black text-lg font-medium tracking-wider">
          Leave Approval
        </div>
      </nav>
      <div className="self-stretch flex justify-between items-center">
        <HeaderRight text="Login" link={'/login'}></HeaderRight>
        <HeaderRight text="Sign Up" link={'/signup'}></HeaderRight>
      </div>
    </div>
  );
}

function HeaderRight({ text, link }) {
  return (
    <div className="text-indigo-500 text-lg font-bold tracking-wider whitespace-nowrap shadow-sm bg-white grow items-stretch py-3 px-4 rounded-3xl max-md:px-5">
      <Link to={link}>{text}</Link>
    </div>
  );
}
