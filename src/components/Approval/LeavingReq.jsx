import React, { useState } from 'react';
import TimerIcon from '../../assets/Time.png';
import vectorIcon from '../../assets/Vector.png';
import CalendarIcon from '../../assets/CalendarIcon.png';

const LeavingReqHeader = ({ reason, personSrc, typeName }) => {
  return (
    <header className="flex flex-col items-start">
      <div className="text-black text-base font-medium">{reason}</div>
      <div className="flex items-center gap-2 mt-3">
        <img
          loading="lazy"
          src={personSrc}
          className="w-[25px] h-[25px] object-contain"
          alt="Person"
        />
        <div className="text-neutral-400 text-xs font-medium">{typeName}</div>
      </div>
    </header>
  );
};

const LeavingReqContent = ({ duration, startDate, status, type }) => {
  const [showCalendar, setShowCalendar] = useState(false);

  const toggleCalendar = () => {
    setShowCalendar(!showCalendar);
  };

  return (
    <div className="flex flex-col w-full">
      <div className="flex justify-around text-neutral-400 text-sm font-medium">
        <div>Duration</div>
        <div>Start</div>
        <div>Status</div>
        <div>Type</div>
      </div>
      <div className="flex justify-around items-center text-black text-base font-bold mt-3.5">
        <div>{duration}</div>
        <div className="flex items-center text-slate-800 text-xs font-medium">
          {startDate}
          <img
            src={CalendarIcon}
            alt="Calendar"
            className="ml-2 cursor-pointer w-4 h-4"
            onClick={toggleCalendar}
          />
        </div>
        <div className="text-cyan-700 text-xs font-medium">{status}</div>
        <div className="text-slate-800 text-xs font-medium">{type}</div>
      </div>
      {/* {showCalendar && (
        <CalendarComponent
          startDate={startDate}
          onClose={toggleCalendar} // Callback
        />
      )} */}
    </div>
  );
};

const LeavingReqComponent = ({
  reason,
  personSrc,
  typeName,
  duration,
  startDate,
  status,
  type,
}) => {
  return (
    <form className="bg-white flex w-full py-4 rounded-2xl items-center">
      <img loading="lazy" src={TimerIcon} className="mx-4" alt="Timer Icon" />
      <div className="flex-grow flex flex-col md:flex-row justify-center items-center">
        <div className="md:w-1/3">
          <LeavingReqHeader
            reason={reason}
            personSrc={personSrc}
            typeName={typeName}
          />
        </div>
        <div className="md:w-2/3">
          <LeavingReqContent
            duration={duration}
            startDate={startDate}
            status={status}
            type={type}
          />
        </div>
      </div>

      <img loading="lazy" src={vectorIcon} className="mx-4" alt="Vector Icon" />
    </form>
  );
};

export default LeavingReqComponent;
