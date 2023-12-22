import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
const MyCalendar = ({ startDate, endDate }) => {
  const isInRange = (date) => {
    return date >= startDate && date <= endDate;
  };
  const tileDisabled = () => true;
  const tileClassName = ({ date, view }) => {
    if (view === 'month') {
      if (isInRange(date)) {
        return 'bg-sky-500/75';
      }
    }
  };

  return (
    <div>
      <Calendar
        tileClassName={tileClassName}
        activeStartDate={new Date()}
        view="month"
      />
    </div>
  );
};

export default MyCalendar;
