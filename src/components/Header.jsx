import React from 'react';

export default function Header() {
  return (
    <div className="self-stretch flex w-full justify-between items-center max-md:max-w-full max-md:flex-wrap">
      <div className="flex justify-between gap-5 items-start max-md:max-w-full max-md:flex-wrap max-md:justify-center">
        <div className="text-black text-lg font-medium tracking-wider whitespace-nowrap">
          Dashboard
        </div>
        <div className="text-black text-lg font-medium tracking-wider self-stretch">
          History
        </div>
        <div className="text-black text-lg font-medium tracking-wider self-stretch">
          Blog
        </div>
        <div className="text-black text-lg font-medium tracking-wider self-stretch">
          Pages
        </div>
        <div className="text-black text-lg font-medium tracking-wider">
          Contact
        </div>
      </div>
      <div className="self-stretch flex justify-between gap-5 items-center">
        <div className="text-indigo-500 text-lg font-bold tracking-wider whitespace-nowrap shadow-sm bg-white grow items-stretch pt-4 pb-2.5 px-6 rounded-3xl max-md:px-5">
          Sign in
        </div>
        <div className="text-indigo-500 text-lg font-bold tracking-wider whitespace-nowrap shadow-sm bg-white grow items-stretch pt-4 pb-2.5 px-6 rounded-3xl max-md:px-5">
          Register
        </div>
      </div>
    </div>
  );
}
