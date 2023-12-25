import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../../context/AuthContext.jsx';
import { useNavigate } from 'react-router-dom';

export default function Profile() {
  const navigate = useNavigate();
  const { logout, userData } = useContext(AuthContext);
  const [leaveEntitlement, setLeaveEntitlement] = React.useState({});
  const fetchLeaveEntitlement = async () => {
    try {
      const response = await fetch(`/api/leave-entitlement/get/${userData.id}`);
      if (response.ok) {
        const data = await response.json();
        return data;
      } else {
        console.log('Bad request', response.statusText);
      }
    } catch (error) {
      console.error('Caught error:', error);
    }
  };
  useEffect(() => {
    if (userData && userData.id) {
      fetchLeaveEntitlement().then((data) => {
        setLeaveEntitlement(data);
        console.log('Leave Entitlement:', data);
      });
    }
  }, [userData]);
  return (
    <div className={'prose flex flex-col mx-auto container'}>
      <h1 className={'mt-5 mx-auto'}>Profile Page</h1>
      <h2>Id: {userData.id}</h2>
      <h2>Role: {userData.role}</h2>
      <h2>User: {userData.name}</h2>
      <h2>Email: {userData.email}</h2>
      <h2>Leave Entitlement: </h2>
      <ul>
        <li>Annual Leave: {leaveEntitlement.annualLeaveDays}</li>
        <li>Medical Leave: {leaveEntitlement.medicalLeaveDays}</li>
        <li>Compensation Leave: {leaveEntitlement.compensationLeaveDays}</li>
      </ul>
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
