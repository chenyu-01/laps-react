import React from 'react';
import UserCard from './UserCard.jsx';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
export default function Header({ toggleSidebar }) {
  const { logout } = useContext(AuthContext);

  return (
    <div className={'flex w-full'}>
      <div className="flex justify-between items-center bg-white w-full px-12 py-4 border-b-2 border-solid max-md:px-5">
        <div className={'flex items-center'}>
          <div className="form-control mr-4">
            <label className="btn btn-circle swap swap-rotate">
              {/* this hidden checkbox controls the state */}
              <input type="checkbox" onChange={toggleSidebar} />

              {/* hamburger icon */}
              <svg
                className="swap-off fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 512 512"
              >
                <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
              </svg>

              {/* close icon */}
              <svg
                className="swap-on fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 512 512"
              >
                <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
              </svg>
            </label>
          </div>
          <h1 className={'font-bold text-2xl hidden lg:block'}>
            Leave Application Processing System
          </h1>
        </div>
        <div className="items-center flex gap-4 py-0.5">
          <UserCard />
          <button className="btn btn-primary" onClick={logout}>
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}
