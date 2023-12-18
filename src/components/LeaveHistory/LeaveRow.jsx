import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function LeaveRow({
  leaveId,
  type,
  startDate,
  endDate,
  reason,
  status,
}) {
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-between px-0.5 max-md:max-w-full max-md:flex-wrap max-md:justify-center border-b">
      <div className={'w-1/6'}>
        <Cell>{leaveId}</Cell>
      </div>
      <div className={'w-1/6'}>
        <Cell>{type}</Cell>
      </div>
      <div className={'w-1/5'}>
        <Cell>{startDate}</Cell>
      </div>
      <div className={'w-1/5'}>
        <Cell>{endDate}</Cell>
      </div>
      <div className={'w-1/5'}>
        <Cell>{reason}</Cell>
      </div>
      <div className={'w-1/5'}>
        <Cell>{status}</Cell>
      </div>
      <div className={'w-1/6'}>
        <Cell>
          <button
            className="btn btn-primary"
            onClick={() => navigate(`/leave-modify/${leaveId}`)}
          >
            Modify
          </button>
        </Cell>
      </div>
      <div className={'w-1/6'}>
        <Cell>
          <button className="btn btn-error">Delete</button>
        </Cell>
      </div>
    </div>
  );
}

function Cell({ children }) {
  return (
    <div className="text-zinc-700 text-opacity-80 text-center text-sm tracking-normal whitespace-nowrap justify-center px-2  py-5  max-md:px-5">
      {children}
    </div>
  );
}

export function HeaderRow() {
  return (
    <div className="flex items-stretch justify-between px-0.5 max-md:max-w-full max-md:flex-wrap max-md:justify-center border-b">
      <div className={'w-1/6'}>
        <Cell>Id</Cell>
      </div>
      <div className={'w-1/6'}>
        <Cell>Type</Cell>
      </div>
      <div className={'w-1/5'}>
        <Cell>StartDate</Cell>
      </div>
      <div className={'w-1/5'}>
        <Cell>EndDate</Cell>
      </div>
      <div className={'w-1/5'}>
        <Cell>Reason</Cell>
      </div>
      <div className={'w-1/5'}>
        <Cell>Status</Cell>
      </div>
      <div className={'w-1/3'}>
        <Cell>Operation</Cell>
      </div>
    </div>
  );
}
