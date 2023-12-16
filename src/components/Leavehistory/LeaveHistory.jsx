import * as React from 'react';
import LeaveColumnDashboard from './Leave-Column-Dashboard.jsx';
import LeaveTitle from './Leave-Title';
import LeaveButtonCategories from './Leave-Button-Categories.jsx';
import LeaveColumnName from './Leave-Column-Name.jsx';
import LeaveColumnOrderID from './Leave-Column-OrderID.jsx';
import LeaveColumnStart from './Leave-Column-Start.jsx';
import LeaveColumnEnd from './Leave-Column-End.jsx';
import LeaveColumnReason from './Leave-Column-Reason.jsx';
import LeaveColumnStatus from './Leave-Column-Status.jsx';
import LeaveColumnOperator from './Leave-Column-Operator.jsx';
import LeavePerPage from './LeavePerPage.jsx';
import LeaveTotalPage from './LeaveTotalPage.jsx';
import LeaveHeader from './Leave-Header.jsx';

export default function LeaveHistory() {
  return (
    <div className="bg-slate-50 pb-5">
      <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
        <LeaveColumnDashboard />
        <div className="flex flex-col items-stretch w-[79%] ml-5 max-md:w-full max-md:ml-0">
          <div className="flex grow flex-col items-stretch max-md:max-w-full">
            <LeaveHeader />

            <div className="flex flex-col mt-4 px-16 items-start max-md:max-w-full max-md:px-5">
              <LeaveTitle />
              <LeaveButtonCategories />
              <div className="bg-white self-stretch flex flex-col items-stretch mt-3.5 pb-9 rounded-xl border-[0.889px] border-solid border-gray-200 max-md:max-w-full">
                <LeaveColumnName />
                <div className="self-center flex w-[716px] max-w-full justify-between gap-5 mt-5 px-0.5 items-start max-md:flex-wrap max-md:justify-center">
                  <LeaveColumnOrderID />
                  <LeaveColumnStart />
                  <LeaveColumnEnd />
                  <LeaveColumnReason />
                  <LeaveColumnOperator />
                  <LeaveColumnStatus />
                </div>
                <div className="self-center flex w-[812px] max-w-full items-stretch justify-between gap-5 mt-80 px-0.5 max-md:flex-wrap max-md:mt-10">
                  <LeavePerPage />
                  <LeaveTotalPage />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
