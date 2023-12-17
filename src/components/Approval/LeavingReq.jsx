import React, { useState, useRef, useEffect } from 'react';
import TimerIcon from '../../assets/Time.png';
import vectorIcon from '../../assets/Vector.png';
import CalendarIcon from '../../assets/CalendarIcon.png';
import acceptIcon from '../../assets/AcceptIcon.png';
import rejectIcon from '../../assets/RejectIcon.png';

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

const LeavingReqContent = ({ duration, startDate, comment, type }) => {
  const [showCalendar, setShowCalendar] = useState(false);

  const toggleCalendar = () => {
    setShowCalendar(!showCalendar);
  };

  return (
    <div className="flex flex-col w-full">
      <div className="flex justify-around text-neutral-400 text-sm font-medium">
        <div>Duration</div>
        <div>Start</div>
        <div>Comment</div>
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
        <div className="text-cyan-700 text-xs font-medium">{comment}</div>
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
  comment,
  type,
}) => {
  const [showCommentInput, setShowCommentInput] = useState(false);
  const [commentPosition, setCommentPosition] = useState({});
  const dropdownMenuRef = useRef(null);
  const layoutRef = useRef(null);

  const handleCommentClick = () => {
    if (dropdownMenuRef.current && layoutRef.current) {
      const dropdownRect = dropdownMenuRef.current.getBoundingClientRect();
      const layoutRect = layoutRef.current.getBoundingClientRect();

      setShowCommentInput(true);
      setCommentPosition({
        top: dropdownRect.bottom - layoutRect.top + window.scrollY + 'px',
        left: dropdownRect.left - layoutRect.left + window.scrollX + 'px',
        width: dropdownRect.width + 'px',
      });
    }
  };

  const handleSubmitComment = () => {
    setShowCommentInput(false);
  };

  const handleCancelComment = () => {
    setShowCommentInput(false);
  };

  const handleCommentAreaClick = (event) => {
    event.stopPropagation();
  };

  return (
    <form
      ref={layoutRef}
      className="bg-white flex w-full py-4 rounded-2xl items-center relative"
    >
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
            comment={comment}
            type={type}
          />
        </div>
      </div>
      <div className="dropdown dropdown-bottom dropdown-end">
        <img
          tabIndex={0}
          src={vectorIcon}
          alt="Options"
          className="mx-4 cursor-pointer"
          role="button"
        />
        <ul
          ref={dropdownMenuRef}
          tabIndex={0}
          className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li>
            <a>
              <img
                src={acceptIcon}
                alt="Accept"
                className="inline-block w-4 h-4 mr-2"
              />
              Accept
            </a>
          </li>
          <li>
            <a>
              <img
                src={rejectIcon}
                alt="Reject"
                className="inline-block w-4 h-4 mr-2"
              />
              Reject
            </a>
          </li>
          <li onClick={handleCommentClick}>
            <a>Comment</a>
          </li>
        </ul>
      </div>
      {showCommentInput && (
        <div
          className="absolute z-10 border border-gray-300 p-2 bg-white rounded"
          style={commentPosition}
          onClick={handleCommentAreaClick}
        >
          <textarea
            className="textarea textarea-accent w-full"
            placeholder="Add a comment..."
            onClick={handleCommentAreaClick}
          ></textarea>
          <div className="flex mt-2">
            <div className="flex-1 flex justify-center">
              <img
                src={acceptIcon}
                alt="Submit"
                className="cursor-pointer w-6 h-6"
                onClick={handleSubmitComment}
              />
            </div>
            <div className="flex-1 flex justify-center">
              <img
                src={rejectIcon}
                alt="Cancel"
                className="cursor-pointer w-6 h-6"
                onClick={handleCancelComment}
              />
            </div>
          </div>
        </div>
      )}
    </form>
  );
};

export default LeavingReqComponent;
