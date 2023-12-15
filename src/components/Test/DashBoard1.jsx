import * as React from "react";

export default function DashBoard1() {
  return (
    <div className="bg-slate-50 flex flex-col pl-5 pr-20 pt-7 pb-12 rounded-none max-md:pr-5">
      <div className="self-center flex w-full max-w-[1329px] items-center justify-between gap-5 pr-8 max-md:max-w-full max-md:flex-wrap max-md:pr-5">
        <div className="text-slate-600 text-2xl font-extrabold leading-9 flex-1 my-auto">
          Dashboard
        </div>
      </div>
      <div className="items-stretch flex justify-between gap-5 mt-0 pl-6 pr-20 py-3 self-start max-md:mt-10 max-md:px-5">
        <div className="text-blue-600 text-center text-xs font-extrabold leading-5 self-center my-auto">
          Main Page
        </div>
      </div>
      <div className="items-stretch flex justify-between gap-5 pl-6 pr-20 py-3 self-start max-md:px-5">
        <div className="text-blue-600 text-left text-xs font-bold leading-5 self-center my-auto">
          Employee
        </div>
      </div>
      <div className="flex flex-col items-stretch mt-3 pl-6 pr-20 self-start max-md:px-5">
        <div className="text-gray-500 text-left text-xs font-bold leading-5 whitespace-nowrap">
          Submit Leave Application{" "}
        </div>
        <div className="text-gray-500 text-left text-xs font-bold leading-5 mt-6">
          Leave History
        </div>
        <div className="text-gray-500 text-left text-xs font-bold leading-5 mt-6">
          Claim Compensation
        </div>
      </div>
      <div className="items-stretch flex justify-between gap-5 mt-3 pl-6 pr-20 py-3 self-start max-md:px-5">
        <div className="text-blue-600 text-left text-xs font-bold leading-5 self-center my-auto">
          Manager
        </div>
      </div>
      <div className="flex flex-col mt-3 px-5 self-start max-md:pl-5">
        <div className="text-gray-500 text-left text-xs font-bold leading-5 self-stretch">
          Manage Leave Application
        </div>
        <div className="text-gray-500 text-left text-xs font-bold leading-5 self-stretch whitespace-nowrap mt-6">
          View Application for Approval
        </div>
        <div className="text-gray-500 text-left text-xs font-bold leading-5 self-stretch mt-6">
          View Employee Leave History
        </div>
        <div className="text-gray-500 text-left text-xs font-bold leading-5 self-stretch mt-6">
          Approve/Reject Leave
        </div>
        <div className="text-gray-500 text-left text-xs font-bold leading-5 self-stretch whitespace-nowrap mt-6">
          Approve/Reject Compensation claim
        </div>
      </div>
      <div className="items-stretch flex w-64 max-w-full justify-between gap-5 mt-3 pl-6 pr-20 py-3 self-start max-md:px-5">
        <div className="text-blue-600 text-center text-xs font-bold leading-5 self-center my-auto">
          Admin
        </div>
      </div>
      <div className="flex flex-col items-stretch mt-3 mb-24 pl-6 pr-16 self-start max-md:mb-10 max-md:px-5">
        <div className="text-gray-500 text-left text-xs font-bold leading-5">
          Manage Staff
        </div>
        <div className="text-gray-500 text-left text-xs font-bold leading-5 mt-6">
          Manage Leave Types
        </div>
        <div className="text-gray-500 text-left text-xs font-bold leading-5 whitespace-nowrap mt-6">
          Manage Leave Entitlement
        </div>
        <div className="text-gray-500 text-left text-xs font-bold leading-5 whitespace-nowrap mt-6">
          Manage Approval Hierarchy
        </div>
        <div className="text-gray-500 text-left text-xs font-bold leading-5 mt-6">
          Settings
        </div>
        <div className="text-gray-500 text-left text-xs font-bold leading-5 mt-6">
          Notifications
        </div>
        <div className="text-gray-500 text-left text-xs font-bold leading-5 mt-6">
          Logout
        </div>
      </div>
    </div>
  );
}