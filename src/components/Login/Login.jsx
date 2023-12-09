import * as React from 'react';
import universityImage from './university.png';
import { useState } from 'react';
import InputBox from './inputBox';
export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission

    // Prepare data to be sent
    const data = {
      username, // assuming these are state variables
      password,
    };

    try {
      const response = await fetch('YOUR_BACKEND_ENDPOINT', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        // Handle successful submission here
        const responseData = await response.json();
        console.log('Login Successful:', responseData);
      } else {
        // Handle errors
        console.error('Login Failed');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };
  return (
    <div className="">
      <div className="flex w-full flex-col mb-40 items-start max-md:max-w-full max-md:my-10">
        <div className="self-stretch flex items-stretch justify-between gap-5 mt-20 max-md:max-w-full max-md:flex-wrap">
          <img
            loading="lazy"
            srcSet={universityImage}
            className="aspect-[1.18] object-contain object-center w-full overflow-hidden grow basis-[0%] max-md:max-w-full"
          />
          <div className="self-center flex grow basis-[0%] flex-col items-center my-auto">
            <form onSubmit={handleSubmit}>
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
              <div className="text-white text-xl font-bold tracking-widest whitespace-nowrap shadow-lg bg-indigo-500 self-stretch justify-center items-center mt-10 px-16 py-6 rounded-xl max-md:mt-10 max-md:px-5">
                <p className="text-center">Sign In</p>
              </div>
            </form>
            <div className="text-zinc-500 text-center text-base font-bold leading-[77px] tracking-widest max-w-[400px] mt-6">
              Forget Password ?
            </div>
            <div className="text-indigo-500 text-center text-base font-medium mt-4">
              <span className="font-medium text-black">
                if you do not have an account you can{' '}
              </span>
              <span className="font-bold text-indigo-500">Register here!</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
