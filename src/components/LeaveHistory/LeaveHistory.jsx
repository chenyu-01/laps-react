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

export default function LeaveHistory() {
  const [status, setStatus] = React.useState('All');
  let leaveApplicationList;
  async function fetchLeaveApplicationList() {
    // Todo
    try {
      let response;
      switch (status) {
        case 'All':
          response = await fetch(
            'http://localhost:8080/api/applications/leave-application'
          );
          break;
        case 'Applied':
          response = await fetch(
            'http://localhost:8080/api/applications/leave-application?status=Applied'
          );
          break;
        case 'Approved':
          response = await fetch(
            'http://localhost:8080/api/applications/leave-application?status=Approved'
          );
          break;
        case 'Rejected':
          response = await fetch(
            'http://localhost:8080/api/applications/leave-application?status=Rejected'
          );
          break;
        case 'Cancelled':
          response = await fetch(
            'http://localhost:8080/api/applications/leave-application?status=Cancelled'
          );
          break;
        case 'Updated':
          response = await fetch(
            'http://localhost:8080/api/applications/leave-application?status=Updated'
          );
          break;
        default:
          response = await fetch(
            'http://localhost:8080/api/applications/leave-application'
          );
          break;
      }
      if (response.ok) {
        leaveApplicationList = await response.json();
        console.log(leaveApplicationList);
      } else {
        const error = await response.json();
        console.error(error);
      }
    } catch (e) {
      console.log(e);
    }
  }
  fetchLeaveApplicationList();
  return (
    <div>
      <Layout>
        <div className="flex flex-col mt-4 px-16 items-start max-md:max-w-full max-md:px-5 min-w-[950px]">
          <LeaveTitle />
          <LeaveButtonCategories status={status} setStatus={setStatus} />
          <div className="bg-white flex flex-col mt-3.5 pb-9 rounded-xl border-[0.889px] border-solid border-gray-200 md:w-full">
            <HeaderRow />
            {mockLeaveApplicationList.map((la) => (
              <LeaveRow
                key={la.leaveId}
                leaveId={la.leaveId}
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
