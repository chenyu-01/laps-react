import { React, useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

export default function SideBar({ isOpen }) {
  // eslint-disable-next-line no-unused-vars
  const { userData } = useContext(AuthContext);
  const sideBarClass = isOpen
    ? 'transform translate-x-0 w-1/5'
    : 'transform -translate-x-full w-0';
  // const role = userData.role;
  const role = 'Employee';
  return (
    <div
      className={`flex flex-col w-1/5 bg-white items-stretch max-md:w-full overflow-hidden transition-transform duration-300 ${sideBarClass}`}
    >
      <div className="shadow-2xl flex grow flex-col px-2 py-4 items-start divide-y-5">
        {role === 'Employee' ? <NavigationEmployee /> : null}
        {role === 'Admin' ? <NavigationAdmin /> : null}
        {role === 'Manager' ? <NavigationManager /> : null}
      </div>
    </div>
  );
}

function NavLink({ children }) {
  return (
    <div className="text-zinc-700 text-opacity-80 text-base font-medium whitespace-nowrap justify-center items-stretch bg-white rounded-3xl max-md:px-5 py-3">
      {children}
    </div>
  );
}

function NavigationEmployee() {
  return (
    <div>
      <NavLink>
        <a href={'http://localhost:8080/leave'}>New Leave Application</a>
      </NavLink>
      <NavLink>
        <Link to={'/LeaveHistory'}>Leave History</Link>
      </NavLink>
    </div>
  );
}

function NavigationAdmin() {
  return (
    <div>
      <NavLink>
        <Link to={'/Admin'}>Admin Page</Link>
      </NavLink>
      <NavLink>
        <Link to={'/Approval'}>Approval Page</Link>
      </NavLink>
    </div>
  );
}

function NavigationManager() {
  return (
    <div>
      <NavLink>
        <a href={'http://localhost:8080/leave'}>New Leave Application</a>
      </NavLink>
      <NavLink>
        <Link to={'/Approval'}>Approval Page</Link>
      </NavLink>
    </div>
  );
}
