import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext.jsx';
import { useNavigate } from 'react-router-dom';
export default function Profile() {
  const navigate = useNavigate();
  const { isAuthenticated, logout, userData } = useContext(AuthContext);
  return (
    <div className={'prose flex flex-col mx-auto container'}>
      <h1 className={'mt-5 mx-auto'}>Profile Page</h1>
      <h2>Role: {userData.role}</h2>
      <h2>User: {userData.name}</h2>
      <h2>Email: {userData.email}</h2>
      <button
        className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg w-full my-2"
        onClick={logout}
      >
        Logout
      </button>
      <button
        className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg w-full my-2"
        onClick={(event) => {
          event.preventDefault();
          navigate('/dashboard');
        }}
      >
        Dashboard
      </button>
    </div>
  );
}
