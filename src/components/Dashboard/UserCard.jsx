import React from 'react';
import { AuthContext } from '../../context/AuthContext.jsx';
import usericon from './usericon.png';
export default function UserCard() {
  const { userData } = React.useContext(AuthContext);
  return (
    <div className="items-stretch bg-white bg-opacity-50 self-stretch flex gap-2.5 px-2.5 py-2 rounded-lg border-[1.024px] border-solid border-indigo-50 max-md:justify-center">
      <img
        alt={'user-icon'}
        loading="lazy"
        src={usericon}
        className="aspect-[0.97] object-contain object-center w-8 justify-center items-center overflow-hidden self-center shrink-0 max-w-full my-auto"
      />
      <div className="items-stretch flex grow basis-[0%] flex-col">
        <div className="justify-center text-slate-700 text-xs font-medium whitespace-nowrap">
          Welcome back,
        </div>
        <div className="justify-center text-slate-700 text-lg font-medium whitespace-nowrap">
          {userData.name}
        </div>
      </div>
    </div>
  );
}
