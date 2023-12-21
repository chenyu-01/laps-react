import React from 'react';
import Layout from '../Dashboard/Layout.jsx';
import { useParams } from 'react-router-dom';
function LeaveModify() {
  // eslint-disable-next-line no-unused-vars
  const { leaveId } = useParams();
  const leaveApplication = fetch(
    `http://localhost:8080/api/leaveApplication/find/${leaveId}` // Todo
  ); // backend not ready
  let mockApplication = {
    leaveId: 10,
    type: 'Annual',
    startDate: '2010-09-04',
    endDate: '2010-09-15',
    reason: 'Family Vacation',
    comment: null,
    contactInfo: '1234567890',
    status: 'Applied',
  };
  const [leaveType, setLeaveType] = React.useState(mockApplication.type);
  const [startDate, setStartDate] = React.useState(mockApplication.startDate);
  const [endDate, setEndDate] = React.useState(mockApplication.endDate);
  const [reason, setReason] = React.useState(mockApplication.reason);
  const [contactInfo, setContactInfo] = React.useState(
    mockApplication.contactInfo
  );
  const handleSubmit = (e) => {
    e.preventDefault();
  }; // Todo
  const deleteApplication = (e) => {
    e.preventDefault();
  }; // Todo
  return (
    <div className="container mx-auto p-8">
      <div className="max-w-md mx-auto bg-white rounded-lg overflow-hidden md:max-w-screen-sm">
        <div className="md:flex">
          <div className="w-full p-4">
            <div className="relative">
              <div className="text-lg text-center text-gray-700 font-semibold">
                Leave Application Form
              </div>
              <form className="mt-4" onSubmit={handleSubmit}>
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
                <div className="flex items-center justify-center">
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

export default LeaveModifyPage;
