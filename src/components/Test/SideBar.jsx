import { React, useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

export default function SideBar() {
  const { userData } = useContext(AuthContext);
  const role = userData.role;
  return (
    <div className="flex flex-col bg-white items-stretch w-[21%] max-md:w-full max-md:ml-0">
      <div className="shadow-2xl flex w-full grow flex-col mx-auto px-8 py-4 items-start max-md:px-5 divide-y-5">
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
        <Link to={'/Admin'}>Admin Page</Link>
      </NavLink>
      <NavLink>
        <Link to={'/Approval'}>Approval Page</Link>
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
        <Link to={'/Approval'}>Approval Page</Link>
      </NavLink>
    </div>
  );
}
