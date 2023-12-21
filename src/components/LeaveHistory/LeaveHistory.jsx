import * as React from 'react';
import LeaveTitle from './Leave-Title';
import LeaveButtonCategories from './Leave-Button-Categories.jsx';
import LeaveRow, { HeaderRow } from './LeaveRow.jsx';
// eslint-disable-next-line no-unused-vars
import LeavePerPage from './LeavePerPage.jsx';
// eslint-disable-next-line no-unused-vars
import LeaveTotalPage from './LeaveTotalPage.jsx';
import Layout from '../Dashboard/Layout.jsx';
import mockLeaveApplicationList from './mocklist.js';
import { AuthContext } from '../../context/AuthContext.jsx';
import { useContext, useEffect, useState } from 'react';

export default function LeaveHistory() {
  const { userData } = useContext(AuthContext);
  const employeeId = userData.id;
  const [status, setStatus] = React.useState('All');
  const [leaveApplicationList, setLeaveApplicationList] = useState([]);
  async function getLeaveApplicationList() {
    try {
      const response = await fetch(
        `http://localhost:8080/api/applications/findemployee/${employeeId}`,
        {
          method: 'GET',
          credentials: 'include',
        }
      );
      if (response.ok) {
        const list = await response.json();
        console.log('Leave application list:', list);
        setLeaveApplicationList(list);
      } else {
        console.error('Error fetching leave application list:', response);
      }
    } catch (error) {
      console.error('Error fetching leave application list:', error);
    }
  }
  useEffect(() => {
    getLeaveApplicationList();
  }, []);
  useEffect(() => {
    let filteredList = [];
    switch (status) {
      case 'All':
        filteredList = leaveApplicationList;
        break;
      case 'Applied':
        filteredList = leaveApplicationList.filter(
          (la) => la.status === 'Applied'
        );
        break;
      case 'Approved':
        filteredList = leaveApplicationList.filter(
          (la) => la.status === 'Approved'
        );
        break;
      case 'Rejected':
        filteredList = leaveApplicationList.filter(
          (la) => la.status === 'Rejected'
        );
        break;
      case 'Cancelled':
        filteredList = leaveApplicationList.filter(
          (la) => la.status === 'Cancelled'
        );
        break;
      case 'Updated':
        filteredList = leaveApplicationList.filter(
          (la) => la.status === 'Updated'
        );
        break;
      // Add more cases as needed
    }
    setLeaveApplicationList(filteredList);
  }, [status, leaveApplicationList]);

  // ... existing return statement ...

  return (
    <div>
      <Layout>
        <div className="flex flex-col mt-4 px-16 items-start max-md:max-w-full max-md:px-5 min-w-[950px]">
          <LeaveTitle />
          <LeaveButtonCategories status={status} setStatus={setStatus} />
          <div className="bg-white flex flex-col mt-3.5 pb-9 rounded-xl border-[0.889px] border-solid border-gray-200 md:w-full">
            <HeaderRow />
            {leaveApplicationList.map((la) => (
              <LeaveRow
                key={la.id}
                leaveId={la.id}
                type={la.type}
                startDate={la.startDate}
                endDate={la.endDate}
                reason={la.reason}
                status={la.status}
              />
            ))}

            {/*<div className="self-center flex w-[812px] max-w-full items-stretch justify-between gap-5 mt-80 px-0.5 max-md:flex-wrap max-md:mt-10">*/}
            {/*  <LeavePerPage />*/}
            {/*  <LeaveTotalPage />*/}
            {/*</div>*/}
          </div>
        </div>
      </Layout>
    </div>
  );
}
