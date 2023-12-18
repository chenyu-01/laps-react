import * as React from 'react';
import LeaveTitle from './Leave-Title';
import LeaveButtonCategories from './Leave-Button-Categories.jsx';
import LeaveRow, { HeaderRow } from './LeaveRow.jsx';
// eslint-disable-next-line no-unused-vars
import LeavePerPage from './LeavePerPage.jsx';
// eslint-disable-next-line no-unused-vars
import LeaveTotalPage from './LeaveTotalPage.jsx';
import TestLayout from '../Test/TestLayout.jsx';
import mockLeaveApplicationList from './mocklist.js';

export default function LeaveHistory() {
  return (
    <div>
      <TestLayout>
        <div className="flex flex-col mt-4 px-16 items-start max-md:max-w-full max-md:px-5">
          <LeaveTitle />
          <LeaveButtonCategories />
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
      </TestLayout>
    </div>
  );
}
