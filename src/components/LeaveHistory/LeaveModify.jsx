import React from 'react';
import TestLayout from '../Test/TestLayout.jsx';
import { useParams } from 'react-router-dom';

function LeaveModify() {
  // eslint-disable-next-line no-unused-vars
  const { leaveId } = useParams();
  // const leaveApplication = fetch(`http://localhost:8080/leave/${leaveId}`);
  return (
    <div className="container mx-auto p-8">
      <div className="max-w-md mx-auto bg-white rounded-lg overflow-hidden md:max-w-screen-sm">
        <div className="md:flex">
          <div className="w-full p-4">
            <div className="relative">
              <div className="text-lg text-center text-gray-700 font-semibold">
                Leave Application Form
              </div>
              <form className="mt-4">
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="leaveType"
                  >
                    Select Leave Type
                  </label>
                  <select
                    id="leaveType"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  >
                    <option>Annual Leave</option>
                    <option>Medical Leave</option>
                    <option>Compensation Leave</option>
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
    <TestLayout>
      <LeaveModify />
    </TestLayout>
  );
}

export default LeaveModifyPage;
