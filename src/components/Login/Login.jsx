import * as React from 'react';
import university from './university.png';

export default function Login() {
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
            srcSet={university}
            className="aspect-[1.18] object-contain object-center w-full overflow-hidden grow basis-[0%] max-md:max-w-full"
          />
          <div className="self-center flex grow basis-[0%] flex-col items-center my-auto">
            <div className="bg-slate-100 self-stretch flex items-center justify-between gap-5 px-6 py-5 rounded-xl max-md:pr-5">
              <div className="text-zinc-600 text-lg font-medium leading-[77px] tracking-widest grow whitespace-nowrap my-auto">
                Enter Email
              </div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/755bab22a4913bff9991cc063d279a47bc0c858f96e8161b37925f6e1fc03a1c?apiKey=45abb410272848ccaf601b3975e11aa1&"
                className="aspect-square object-contain object-center w-6 overflow-hidden self-stretch shrink-0 max-w-full"
              />
            </div>
            <div className="bg-slate-100 self-stretch flex items-center justify-between gap-5 mt-5 px-6 py-5 rounded-xl max-md:pr-5">
              <div className="text-gray-500 text-2xl leading-6 grow whitespace-nowrap my-auto">
                ••••••••
              </div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/58bdacce181e4e72b98cbff0e8ed43606d70f16ced8ca417781a393821921fa8?apiKey=45abb410272848ccaf601b3975e11aa1&"
                className="aspect-square object-contain object-center w-6 overflow-hidden self-stretch shrink-0 max-w-full"
              />
            </div>
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
