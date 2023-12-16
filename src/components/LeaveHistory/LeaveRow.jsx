import React from 'react';

export default function LeaveRow({
  orderID,
  startDate,
  endDate,
  reason,
  status,
}) {
  return (
    <div className="flex items-stretch justify-between px-0.5 max-md:max-w-full max-md:flex-wrap max-md:justify-center border-b">
      <Cell>{orderID}</Cell>
      <Cell>{startDate}</Cell>
      <Cell>{endDate}</Cell>
      <Cell>{reason}</Cell>
      <Cell>{status}</Cell>
    </div>
  );
}

function Cell({ children }) {
  return (
    <div className="text-zinc-700 text-opacity-80 text-center text-sm tracking-normal whitespace-nowrap justify-center w-1/5 px-2  py-5  max-md:px-5">
      {children}
    </div>
  );
}
