import React from 'react';

export default function LeaveButtonCategories() {
  return (
    <div className="w-full gap-3.5 mt-5 max-md:max-w-full md:flex hidden">
      <CategoryButton>All</CategoryButton>
      <CategoryButton>Applied</CategoryButton>
      <CategoryButton>Status</CategoryButton>
      <CategoryButton>Approved</CategoryButton>
      <CategoryButton>Rejected</CategoryButton>
      <CategoryButton>Cancelled</CategoryButton>
    </div>
  );
}

function CategoryButton({ children }) {
  return (
    <div className="text-neutral-800 text-opacity-90 text-base font-medium tracking-normal whitespace-nowrap justify-center bg-white px-6 py-3.5 rounded-3xl border-[0.889px] border-solid border-gray-200 max-md:px-5">
      {children}
    </div>
  );
}
