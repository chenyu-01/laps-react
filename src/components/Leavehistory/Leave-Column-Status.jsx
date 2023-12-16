import React from 'react';

export default function LeaveColumnStatus() {
  return (
    <div className="self-stretch flex basis-[0%] flex-col items-stretch">
      <div className="text-red-700 text-opacity-80 text-sm tracking-normal whitespace-nowrap -ml-0.5 pr-2">
        Rejected
      </div>
      <div className="text-emerald-600 text-sm tracking-normal whitespace-nowrap mt-9">
        Success
      </div>
      <div className="text-blue-600 text-sm tracking-normal whitespace-nowrap mt-10">
        Pending
      </div>
    </div>
  );
}
