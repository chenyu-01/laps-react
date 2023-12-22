import React from 'react';
import { AuthContext } from '../../context/AuthContext.jsx';
import usericon from '../../assets/usericon.png';
import { useNavigate } from 'react-router-dom';
export default function UserCard() {
  const { userData } = React.useContext(AuthContext);
  const navigate = useNavigate();
  const gotoProfile = (e) => {
    e.preventDefault();
    navigate('/profile');
  };
  return (
    <div className=" bg-white bg-opacity-50  gap-2.5 px-3 py-2 rounded-lg border-[1.024px] border-solid border-indigo-50 ">
      <div onClick={gotoProfile} className={'flex'}>
        <img
          alt={'user-icon'}
          loading="lazy"
          src={usericon}
          className="aspect-[0.97] object-contain object-center w-8 justify-center items-center overflow-hidden self-center max-w-full my-auto mr-2"
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
    </div>
  );
}
