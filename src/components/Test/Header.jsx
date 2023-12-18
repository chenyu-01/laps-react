import React from 'react';
import UserCard from './UserCard.jsx';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
export default function Header({ toggleSidebar }) {
  const { logout } = useContext(AuthContext);

  return (
    <div className={'flex w-full'}>
      <div className="flex justify-between items-center bg-white w-full px-12 py-4 border-b-2 border-solid max-md:px-5">
        <div className={''}>
          <h1 className={'font-bold text-2xl'}>
            Leave Application Processing System
          </h1>
          <div className="form-control w-52">
            <label className="cursor-pointer label">
              <span className="label-text">Toggle SideBar</span>
              <input
                type="checkbox"
                className="toggle toggle-primary"
                defaultChecked={'checked'}
                onChange={toggleSidebar}
              />
            </label>
          </div>
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
