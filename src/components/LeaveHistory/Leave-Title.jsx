import React from 'react';

export default function LeaveTitle() {
  return (
    <div className="flex justify-between text-zinc-700 text-opacity-80 text-xl font-medium self-stretch max-md:max-w-full">
      <p>Leave Application History</p>
      <div className="dropdown dropdown-end">
        <div tabIndex={0} role="button" className="btn m-1 md:hidden block">
          Filter by status
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li>
            <a>Item 1</a>
          </li>
          <li>
            <a>Item 2</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
