import { React, useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

export default function SideBar({ isOpen }) {
  // eslint-disable-next-line no-unused-vars
  const { userData } = useContext(AuthContext);
  const sideBarClass = isOpen ? 'block' : 'hidden';
  const role = userData.role;
  // const role = 'Employee';
  return (
    <div
      className={`shadow-2xl absolute h-full md:relative z-10 flex-col w-1/5 bg-white items-stretch max-md:w-2/3 ${sideBarClass}`}
    >
      <div className="flex flex-col px-2 py-4 items-start divide-y-5">
        {role === 'Employee' ? <NavigationEmployee /> : null}
        {role === 'Admin' ? <NavigationAdmin /> : null}
        {role === 'Manager' ? <NavigationManager /> : null}
      </div>
    </div>
  );
}

function NavLink({ children }) {
  return (
    <div className="text-opacity-80 text-base font-medium border-b-2 justify-center items-stretch bg-white max-md:px-5 py-3">
      {children}
    </div>
  );
}

function NavigationEmployee() {
  return (
    <div className={'w-full'}>
      <NavLink>
        <a href={'/leave'}>New Leave Application</a>
      </NavLink>
      <NavLink>
        <Link to={'/LeaveHistory'}>My Leave History</Link>
      </NavLink>
      <NavLink>
        <Link to={'/Dashboard'}>Dashboard</Link>
      </NavLink>
    </div>
  );
}

function NavigationAdmin() {
  return (
    <div className={'divide-y-2 w-full'}>
      <NavLink>
        <Link to={'/Admin'}>Admin Page</Link>
      </NavLink>
      <NavLink>
        <Link to={'/Dashboard'}>Dashboard</Link>
      </NavLink>
    </div>
  );
}

function NavigationManager() {
  return (
    <div className={'divide-y-2 w-full'}>
      <NavLink>
        <a href={'/leave'}>New Leave Application</a>
      </NavLink>
      <NavLink>
        <Link to={'/Approval'}>Subordinate Applications</Link>
      </NavLink>
      <NavLink>
        <Link to={'/LeaveHistory'}>My Leave History</Link>
      </NavLink>
      <NavLink>
        <Link to={'/Dashboard'}>Dashboard</Link>
      </NavLink>
    </div>
  );
}
