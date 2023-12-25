import React from 'react';
import Layout from '../Dashboard/Layout.jsx';
import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext.jsx';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
function LeaveModify() {
  const navigate = useNavigate();
  const { userData } = useContext(AuthContext);
  const { leaveId } = useParams();
  const [leaveType, setLeaveType] = React.useState('');
  const [status, setStatus] = React.useState('');
  const [startDate, setStartDate] = React.useState('');
  const [endDate, setEndDate] = React.useState('');
  const [reason, setReason] = React.useState('');
  const [contactInfo, setContactInfo] = React.useState('');
  const [isOverseas, setIsOverseas] = React.useState(false);
  const [workDissemination, setWorkDissemination] = React.useState('');
  useEffect(() => {
    getLeaveApplication();
  }, []);
  const updateApplicationSubmit = async (e) => {
    e.preventDefault();
    const requestBody = {
      id: parseInt(leaveId),
      type: leaveType,
      startDate: startDate,
      endDate: endDate,
      reason: reason,
      contactInfo: contactInfo,
      isOverseas: isOverseas,
      workDissemination: workDissemination,
    };
    console.log('requestBody:', requestBody);
    try {
      const response = await fetch('/api/applications/update', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
        credentials: 'include',
      });
      if (response.ok) {
        alert('Leave application updated');
        navigate(-1);
      } else {
        const error = await response.json();
        console.error('Error updating leave application:', error);
        handleErrorResponse(error);
      }
    } catch (error) {
      console.error('Error caught:', error);
    }
  };
  const cancelApplication = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`/api/applications/cancel/${leaveId} `, {
        method: 'PUT',
        credentials: 'include',
      });
      if (response.ok) {
        console.log('Leave application cancelled');
        navigate(-1);
      } else {
        const error = await response.json();
        console.error('Error cancelling leave application:', error);
      }
    } catch (error) {
      console.error('Error cancelling leave application:', error);
    }
  };
  const deleteApplication = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`/api/applications/delete/${leaveId} `, {
        method: 'DELETE',
        credentials: 'include',
      });
      if (response.ok) {
        console.log('Leave application deleted');
        navigate(-1);
      } else {
        const error = await response.json();
        console.error('Error deleting leave application:', error);
      }
    } catch (error) {
      console.error('Error deleting leave application:', error);
    }
  };
  const getLeaveApplication = async () => {
    try {
      const response = await fetch(`/api/applications/get/${leaveId}`, {
        method: 'GET',
        credentials: 'include',
      });
      if (response.ok) {
        const la = await response.json();
        console.log('Leave application:', la);
        setLeaveType(la.type);
        setStatus(la.status);
        setStartDate(la.startDate);
        setEndDate(la.endDate);
        setReason(la.reason);
        setContactInfo(la.contactInfo || ''); // For not oversea leave, contactInfo may be null
        setIsOverseas(la.isOverseas || false);
      } else {
        console.error('Error fetching leave application:', response);
      }
    } catch (error) {
      console.error('Error fetching leave application:', error);
    }
  };
  return (
    <div className="container mx-auto p-8">
      <div className="max-w-md mx-auto bg-white rounded-lg overflow-hidden md:max-w-screen-sm">
        <div className="md:flex">
          <div className="w-full p-4">
            <div className="relative">
              <div className="text-lg text-center text-gray-700 font-semibold">
                Leave Application Form: {status}
              </div>
              <form className="mt-4" onSubmit={updateApplicationSubmit}>
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="leaveType"
                  >
                    Select Leave Type
                  </label>
                  <select
                    id="leaveType"
                    value={leaveType}
                    onChange={(e) => setLeaveType(e.target.value)}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  >
                    <option>Annual</option>
                    <option>Medical</option>
                    <option>Compensation</option>
                  </select>
                </div>
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="startDate"
                  >
                    Start Date
                  </label>
                  <input
                    type="date"
                    id="startDate"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="endDate"
                  >
                    End Date
                  </label>
                  <input
                    type="date"
                    id="endDate"
                    onChange={(e) => setEndDate(e.target.value)}
                    value={endDate}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>
                <label className="flex justify-start items-center cursor-pointer mb-2">
                  <span className="text-sm font-bold mr-2">
                    Overseas Leave?
                  </span>
                  <input
                    type="checkbox"
                    checked={isOverseas}
                    className="checkbox checkbox-primary"
                    onChange={(e) => setIsOverseas(e.target.checked)}
                  />
                </label>
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="reason"
                  >
                    Reason for Leave
                  </label>
                  <textarea
                    id="reason"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    rows="3"
                    placeholder="Reason for leave"
                    onChange={(e) => setReason(e.target.value)}
                    value={reason}
                  ></textarea>
                </div>
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="contactInfo"
                  >
                    Contact Information
                  </label>
                  <input
                    type="text"
                    id="contactInfo"
                    value={contactInfo}
                    onChange={(e) => setContactInfo(e.target.value)}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Phone number or email"
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="workDissemination"
                  >
                    Work Dissemination
                  </label>
                  <textarea
                    id="workDissemination"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    rows="2"
                    placeholder="Work dissemination"
                    onChange={(e) => setWorkDissemination(e.target.value)}
                    value={workDissemination}
                  ></textarea>
                </div>
                <div className="flex items-center justify-center mb-2 gap-2">
                  <button
                    className="bg-indigo-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
                    type="submit"
                  >
                    Confirm Changes
                  </button>
                  <button
                    className="bg-red-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
                    onClick={deleteApplication}
                  >
                    Delete Application
                  </button>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <button
                    className="bg-indigo-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
                    onClick={(e) => {
                      e.preventDefault();
                      navigate(-1);
                    }}
                  >
                    Go Back
                  </button>
                  <button
                    className="bg-red-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
                    onClick={cancelApplication}
                  >
                    Cancel Application
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function LeaveModifyPage() {
  return (
    <Layout>
      <LeaveModify />
    </Layout>
  );
}

function handleErrorResponse(responseObj) {
  try {
    let errorMessage = '';
    if (Array.isArray(responseObj)) {
      responseObj.forEach((error) => {
        errorMessage += error.defaultMessage + '\n'; // Add each error message to the alert
      });
    } else {
      // If the error structure is different, adjust accordingly
      errorMessage = responseObj.message || 'An error occurred';
    }
    alert(errorMessage);
  } catch (e) {
    alert('An error occurred while processing the response.');
  }
}
export default LeaveModifyPage;
