import React from 'react';
import LeaveIconAlarm from './Leave-Icon-Alarm.jsx';
import LeaveUserCard from './Leave-User-Card.jsx';

export default function LeaveHeader() {
  return (
    <div className="justify-center border-b-[color:var(--Dividers-and-Borders---grey-Light,#CECECE)] bg-white flex flex-col pl-16 pr-11 py-4 border-b-[0.889px] border-solid items-end max-md:max-w-full max-md:px-5">
      <div className="items-center flex gap-4 py-0.5">
        <LeaveIconAlarm />
        <LeaveUserCard />
      </div>
    </div>
  );
}
