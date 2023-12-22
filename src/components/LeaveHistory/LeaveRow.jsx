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
  const formatDate = (dateTimeString) => {
    const date = new Date(dateTimeString);
    return date.toLocaleDateString('en-SG', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <div className="flex items-center justify-between px-0.5 w-full border-b gap-2">
      <div className={'w-1/8'}>
        <Cell>{leaveId}</Cell>
      </div>
      <div className={'w-1/8'}>
        <Cell>{type}</Cell>
      </div>
      <div className={'w-1/4'}>
        <Cell>{formatDate(startDate)}</Cell>
      </div>
      <div className={'w-1/4'}>
        <Cell>{formatDate(endDate)}</Cell>
      </div>
      <div className={'w-1/8'}>
        <Cell>{status}</Cell>
      </div>
      <div className={'w-1/8'}>
        <Cell>
          <button
            className="btn btn-primary"
            onClick={() => navigate(`/leave-modify/${leaveId}`)}
          >
            View Detail
          </button>
        </Cell>
      </div>
    </div>
  );
}

function Cell({ children }) {
  return (
    <div className="text-zinc-700 text-opacity-80 text-center text-sm tracking-normal min-w-[110px] justify-center py-5">
      {children}
    </div>
  );
}

export function HeaderRow() {
  return (
    <div className="flex items-center justify-between px-0.5 w-full border-b gap-2">
      <div className={'w-1/8'}>
        <Cell>ApplicationID</Cell>
      </div>
      <div className={'w-1/8'}>
        <Cell>Type</Cell>
      </div>
      <div className={'w-1/4'}>
        <Cell>StartDate</Cell>
      </div>
      <div className={'w-1/4'}>
        <Cell>EndDate</Cell>
      </div>

      <div className={'w-1/8'}>
        <Cell>Status</Cell>
      </div>
      <div className={'w-1/8'}>
        <Cell>Operation</Cell>
      </div>
    </div>
  );
}
