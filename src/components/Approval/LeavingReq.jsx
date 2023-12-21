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
    <div className="grid grid-cols-4 gap-4 w-full">
      <div className="text-neutral-400 text-sm font-medium">Duration</div>
      <div className="text-neutral-400 text-sm font-medium">Start</div>
      <div className="text-neutral-400 text-sm font-medium">Comment</div>
      <div className="text-neutral-400 text-sm font-medium">Type</div>

      <div className="text-black text-base font-bold">{duration}</div>
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
  );
};

const LeavingReqComponent = ({
  reason,
  personId,
  typeName,
  startDate,
  endDate,
  comment,
  type,
  applicationId,
  refreshRequests,
}) => {
  const [showCommentInput, setShowCommentInput] = useState(false);
  const [newComment, setNewComment] = useState('');
  const [commentPosition, setCommentPosition] = useState({});
  const [person, setPerson] = useState({});
  const dropdownMenuRef = useRef(null);
  const layoutRef = useRef(null);
  //for demo
  const personSrc = 'https://i.pravatar.cc/150?img=3';

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

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return `${date.getDate()}/${
      date.getMonth() + 1
    }/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`;
  };

  const calculateDuration = (startDate, endDate) => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const diffTime = Math.abs(end - start);

    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    const diffHours = Math.floor(
      (diffTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );

    return `${diffDays} Day ${diffHours} H `;
  };

  const formattedStartDate = formatDate(startDate);
  const duration = calculateDuration(startDate, endDate);
  const API_URL = 'http://localhost:8080/api/applications';

  const fetchPerson = async () => {
    try {
      const response = await fetch(
        `http://localhost:8080/api/admin/${personId}`,
        {
          method: 'GET',
          headers: { 'Content-Type': 'application/json' },
        }
      );
      if (response.ok) {
        const data = await response.json();
        return data;
      }
    } catch (error) {
      console.error('Error fetching person:', error);
    }
  };

  useEffect(() => {
    fetchPerson().then((data) => {
      setPerson(data);
    });
  }, []);

  const handleApprove = async (applicationId) => {
    const updatedData = { status: 'Approved' };
    try {
      const response = await fetch(`${API_URL}/approve/${applicationId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedData),
      });
      if (response.ok) {
        // Todo
        refreshRequests();
      }
    } catch (error) {
      console.error('Error approving application:', error);
    }
  };

  const handleReject = async (applicationId) => {
    const updatedData = { status: 'Rejected' };
    try {
      const response = await fetch(`${API_URL}/reject/${applicationId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedData),
      });
      if (response.ok) {
        // Todo
        refreshRequests();
      }
    } catch (error) {
      console.error('Error rejecting application:', error);
    }
  };

  const handleSubmitComment = async (applicationId) => {
    const updatedData = { comment: newComment };
    try {
      const response = await fetch(`${API_URL}/comment/${applicationId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedData),
      });
      if (response.ok) {
        setShowCommentInput(false);
        refreshRequests();
      }
    } catch (error) {
      console.error('Error submitting comment:', error);
    }
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
            typeName={person.name}
          />
        </div>
        <div className="md:w-2/3">
          <LeavingReqContent
            duration={duration}
            startDate={formattedStartDate}
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
          <li onClick={() => handleApprove(applicationId)}>
            <a>
              <img
                src={acceptIcon}
                alt="Accept"
                className="inline-block w-4 h-4 mr-2"
              />
              Accept
            </a>
          </li>
          <li onClick={() => handleReject(applicationId)}>
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
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            onClick={handleCommentAreaClick}
          ></textarea>
          <div className="flex mt-2">
            <img
              src={acceptIcon}
              alt="Submit"
              className="cursor-pointer w-6 h-6"
              onClick={() => handleSubmitComment(applicationId, newComment)}
            />
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
