import React from 'react';
import Header from './Header';
import universityImage from './university.png';
export default function LayoutAuth({ children }) {
  return (
    <div className="flex justify-center flex-col max-w-[1396px] bg-white items-center sm:px-16 px-3 py-12 rounded-[40px]">
      <Header></Header>
      <div className="flex w-full flex-col mb-40 items-start max-md:max-w-full max-md:my-10">
        <div className="self-stretch flex items-stretch justify-between gap-5 mt-20 max-md:max-w-full max-md:flex-wrap">
          <img
            loading="lazy"
            srcSet={universityImage}
            className="object-contain object-center md:w-1/2 overflow-hidden hidden md:flex"
          />
          <div className="justify-center flex flex-col items-center my-auto">
            <div className="mr-4">{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
