import React from 'react';
import UserCard from './UserCard.jsx';

export default function Header({ toggleSidebar }) {
  return (
    <div className="justify-between items-center border-b-[color:var(--Dividers-and-Borders---grey-Light,#CECECE)] bg-white flex pl-16 pr-11 py-4 border-b-[0.889px] border-solid items-end max-md:max-w-full max-md:px-5">
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
      </div>
    </div>
  );
}
