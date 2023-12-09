import * as React from 'react';
import universityImage from './university.png';
import { useState } from 'react';
import InputBox from './inputBox';
export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  return (
    <div className="bg-white flex flex-col justify-center items-center px-16 py-12 rounded-[40px] max-md:px-5">
      <div className="flex w-full max-w-[1396px] flex-col mt-14 mb-40 items-start max-md:max-w-full max-md:my-10">
        <div className="self-stretch flex w-full justify-between gap-5 items-start max-md:max-w-full max-md:flex-wrap">
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
          <div className="self-stretch flex justify-between gap-5 items-start">
            <div className="flex grow basis-[0%] flex-col items-stretch mt-4">
              <div className="text-indigo-500 text-lg font-bold tracking-wider">
                Sign in
              </div>
              <div className="bg-indigo-500 self-center w-[25px] shrink-0 h-[3px] mt-2" />
            </div>
            <div className="text-indigo-500 text-lg font-bold tracking-wider whitespace-nowrap shadow-sm bg-white grow items-stretch pt-4 pb-2.5 px-6 rounded-3xl max-md:px-5">
              Register
            </div>
          </div>
        </div>
        <div className="text-black text-center text-3xl font-bold leading-[77px] max-w-[639px] ml-16 mt-24 max-md:max-w-full max-md:mt-10">
          Leave Application Processing System
        </div>
        <div className="self-stretch flex items-stretch justify-between gap-5 mt-6 max-md:max-w-full max-md:flex-wrap">
          <img
            loading="lazy"
            srcSet={universityImage}
            className="aspect-[1.18] object-contain object-center w-full overflow-hidden grow basis-[0%] max-md:max-w-full"
          />
          <div className="self-center flex grow basis-[0%] flex-col items-center my-auto">
            <InputBox
              input={username}
              setInput={setUsername}
              placeholder={'Your Email'}
              property={'user'}
            ></InputBox>
            <InputBox
              input={password}
              setInput={setPassword}
              placeholder={'Your Password'}
              property={'pass'}
            ></InputBox>
            <div className="text-white text-xl font-bold leading-[77px] tracking-widest whitespace-nowrap shadow-lg bg-indigo-500 self-stretch justify-center items-center mt-10 px-16 py-6 rounded-xl max-md:mt-10 max-md:px-5">
              Sign In
            </div>
            <div className="text-zinc-500 text-center text-base font-bold leading-[77px] tracking-widest max-w-[400px] mt-6">
              Forget Password ?
            </div>
            <div className="text-indigo-500 text-center text-base font-medium mt-4">
              <span className="font-medium text-black">
                if you don’t an account you can{' '}
              </span>
              <span className="font-bold text-indigo-500">Register here!</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
