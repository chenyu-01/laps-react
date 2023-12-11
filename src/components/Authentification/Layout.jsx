import React from 'react';
import Header from './Header';
export default function Layout({ children }) {
  return (
    <div className="flex justify-center flex-col max-w-[1396px] bg-white items-center px-16 py-12 rounded-[40px]">
      <Header></Header>
      <div className="flex w-full flex-col mb-40 items-start max-md:max-w-full max-md:my-10">
        <div className="self-stretch flex items-stretch justify-between gap-5 mt-20 max-md:max-w-full max-md:flex-wrap">
          {children}
        </div>
      </div>
    </div>
  );
}
