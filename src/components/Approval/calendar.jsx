import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const MyCalendar = ({ startDate, endDate }) => {
  // Ensure the start and end dates are at the beginning of the day for consistent comparison
  const startOfDay = (date) =>
    new Date(date.getFullYear(), date.getMonth(), date.getDate());
  const adjustedStartDate = startOfDay(startDate);
  const adjustedEndDate = startOfDay(endDate);

  const isInRange = (date) => {
    const current = startOfDay(date);
    return current >= adjustedStartDate && current <= adjustedEndDate;
  };

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
