import React from 'react';

export default function LeaveButtonCategories() {
  return (
    <div className="flex items-stretch gap-3.5 mt-5 max-md:max-w-full max-md:flex-wrap max-md:justify-center">
      <div className="text-neutral-800 text-opacity-90 text-base font-medium tracking-normal whitespace-nowrap justify-center items-stretch border-[color:var(--Primary-Blue,#413B89)] bg-white grow px-12 py-4 rounded-3xl border-[0.889px] border-solid max-md:px-5">
        All
      </div>
      <div className="text-neutral-800 text-opacity-90 text-base font-medium tracking-normal whitespace-nowrap justify-center items-stretch bg-white grow px-6 py-3.5 rounded-3xl border-[0.889px] border-solid border-gray-200 max-md:px-5">
        Complete
      </div>
      <div className="text-neutral-800 text-opacity-90 text-base font-medium tracking-normal whitespace-nowrap justify-center items-stretch bg-white grow px-8 py-3.5 rounded-3xl border-[0.889px] border-solid border-gray-200 max-md:px-5">
        Pending
      </div>
      <div className="text-neutral-800 text-opacity-90 text-base font-medium tracking-normal whitespace-nowrap justify-center items-stretch bg-white grow px-7 py-3.5 rounded-3xl border-[0.889px] border-solid border-gray-200 max-md:px-5">
        Rejected
      </div>
    </div>
  );
}
