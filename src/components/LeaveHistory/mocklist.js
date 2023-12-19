let mockLeaveApplicationList = [];
for (let i = 0; i < 10; i++) {
  const mockLeaveApplication = {
    leaveId: i,
    type: 'Annual',
    startDate: '2010-09-04',
    endDate: '2010-09-15',
    reason: 'Family Vacation',
    comment: null,
    contactInfo: '1234567890',
    status: 'Applied',
  };
  const mockLeaveApplicationApproved = {
    leaveId: 100 - i,
    startDate: '2010-09-04',
    type: 'Compensation',
    endDate: '2010-09-15',
    reason: 'Family Vacation',
    status: 'Approved',
    comment: 'Please approve',
    contactInfo: '1234567890',
  };
  const mockLeaveApplicationRejected = {
    leaveId: 1000 - i,
    type: 'Medical',
    startDate: '2010-09-04',
    endDate: '2010-09-15',
    reason: 'Family Vacation',
    status: 'Rejected',
    comment: 'Not approved',
    contactInfo: '1234567890',
  };
  mockLeaveApplicationList.push(mockLeaveApplication);
  mockLeaveApplicationList.push(mockLeaveApplicationApproved);
  mockLeaveApplicationList.push(mockLeaveApplicationRejected);
}

export default mockLeaveApplicationList;
