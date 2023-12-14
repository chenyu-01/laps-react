import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext.jsx';
import BackgroundPicTest from '../../assets/background-pic-test.png';
import { Link } from 'react-router-dom';
export default function DashBoard() {
  const { isAuthenticated, logout, userData } = useContext(AuthContext);
  return (
    <div className={'prose'}>
      <h1 className={'mt-5'}>Dashboard To Test</h1>
      <h2>{isAuthenticated ? 'Authenticated' : 'Not Authenticated'}</h2>
      <div>Role: {userData.role}</div>
      <div>User: {userData.name}</div>
      <div>Email: {userData.email}</div>
      <Link to={'/login'} className="btn btn-primary w-full my-2">
        Login Page
      </Link>
      <button
        className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg w-full my-2"
        onClick={logout}
      >
        Logout
      </button>
      <img src={BackgroundPicTest} alt="BackgroundPicTest" />
    </div>
  );
}
