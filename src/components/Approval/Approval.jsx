import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import TestLayout from '../TestLayout';
import LeavingReqComponent from './LeavingReq';
import queryIcon from '../../assets/query.svg';

const Approval = () => {
  const [requests, setRequests] = useState([]);
  const { isAuthenticated } = useContext(AuthContext);

  useEffect(() => {
    const fetchData = async () => {
      if (isAuthenticated) {
      try {
        const response = await fetch(
          'http://localhost:8080/api/applications/applied',
          {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
            credentials: 'include',
          }
        );

        if (response.ok) {
          const data = await response.json();
          setRequests(data);
        } else {
          console.error('Error fetching data:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
      //}
    };

    fetchData();
  }, [isAuthenticated]);

  // const requests = [
  //   // 示例数据，根据实际情况替换
  //   {
  //     reason: 'Your Reason',
  //     personSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/person1.png',
  //     typeName: 'Name',
  //     duration: '2D 5h',
  //     startDate: '12 Feb',
  //     comment: 'Approved',
  //     type: 'Type1',
  //   },
  //   {
  //     reason: 'Your Reason',
  //     personSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/person1.png',
  //     typeName: 'Name',
  //     duration: '2D 5h',
  //     startDate: '12 Feb',
  //     comment: 'Approved',
  //     type: 'Type1',
  //   },
  //   {
  //     reason: 'Your Reason',
  //     personSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/person1.png',
  //     typeName: 'Name',
  //     duration: '2D 5h',
  //     startDate: '12 Feb',
  //     comment: 'Approved',
  //     type: 'Type1',
  //   },
  // ];

  const ApprvoalHeader = () => {
    const [showInput, setShowInput] = useState(false);
    const [query, setQuery] = useState('');

    const handleIconClick = () => {
      setShowInput(true);
    };

    const handleQueryChange = (event) => {
      setQuery(event.target.value);
    };

    const handleBlur = () => {
      if (!query) {
        setShowInput(false);
      }
      sendQuery(query);
    };

    const sendQuery = (queryContent) => {
      console.log('Sending query:', queryContent);
      //To DO
    };

    return (
      <div className="mb-6">
        <form className="flex items-center justify-between">
          <header className="text-black text-2xl font-bold">
            New Applications
          </header>
          {showInput ? (
            <div className="flex items-center">
              <input
                type="text"
                value={query}
                onChange={handleQueryChange}
                className="border border-gray-300 rounded p-2"
                onBlur={handleBlur}
              />
              <img
                src={queryIcon}
                alt="Query"
                className="ml-2 w-4 h-4 cursor-pointer"
                onClick={() => sendQuery(query)}
              />
            </div>
          ) : (
            <img
              src={queryIcon}
              alt="Query"
              className="ml-2 w-4 h-4 cursor-pointer"
              onClick={handleIconClick}
            />
          )}
        </form>
      </div>
    );
  };
  //a sample
  return (
    <TestLayout>
      <ApprvoalHeader />
      {requests.map((req, index) => (
        <div className="mb-4" key={index}>
          {' '}
          <LeavingReqComponent
            reason={req.reason}
            //personSrc={req.employee.personSrc}
            //typeName={req.employee.name}
            startDate={req.startDate}
            endDate={req.endDate}
            comment={req.comment}
            type={req.type}
            applicationId={req.id}
          />
        </div>
      ))}
    </TestLayout>
  );
};
export default Approval;
