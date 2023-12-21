import React from 'react';

export default function LeaveButtonCategories({ status, setStatus }) {
  return (
    <div className="w-full gap-3.5 mt-5 max-md:max-w-full md:flex hidden">
      <button onClick={() => setStatus('All')}>
        <CategoryButton>All</CategoryButton>
      </button>
      <button onClick={() => setStatus('Applied')}>
        <CategoryButton>Applied</CategoryButton>
      </button>
      <button onClick={() => setStatus('Approved')}>
        <CategoryButton>Approved</CategoryButton>
      </button>
      <button onClick={() => setStatus('Rejected')}>
        <CategoryButton>Rejected</CategoryButton>
      </button>
      <button onClick={() => setStatus('Cancelled')}>
        <CategoryButton>Cancelled</CategoryButton>
      </button>
      <button onClick={() => setStatus('Updated')}>
        <CategoryButton>Updated</CategoryButton>
      </button>
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
