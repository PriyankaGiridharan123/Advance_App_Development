import React from 'react';
import './Application.css';

const Applications = () => {
  const applicationsData = [
    { id: 1, name: 'John Doe', contact: '1234567890', email: 'john@example.com', jobTitle: 'Software Engineer', status: 'Pending' },
    { id: 2, name: 'Jane Smith', contact: '9876543210', email: 'jane@example.com', jobTitle: 'Marketing Manager', status: 'Approved' },
    { id: 3, name: 'Alice Johnson', contact: '5551234567', email: 'alice@example.com', jobTitle: 'Graphic Designer', status: 'Rejected' },
    { id: 4, name: 'John Doe', contact: '1234567890', email: 'john@example.com', jobTitle: 'Software Engineer', status: 'Pending' },
    { id: 5, name: 'Jane Smith', contact: '9876543210', email: 'jane@example.com', jobTitle: 'Marketing Manager', status: 'Approved' },
    { id: 6, name: 'Alice Johnson', contact: '5551234567', email: 'alice@example.com', jobTitle: 'Graphic Designer', status: 'Rejected' },
    { id: 7, name: 'John Doe', contact: '1234567890', email: 'john@example.com', jobTitle: 'Software Engineer', status: 'Pending' },
    { id: 8, name: 'Jane Smith', contact: '9876543210', email: 'jane@example.com', jobTitle: 'Marketing Manager', status: 'Approved' },
    { id: 9, name: 'Alice Johnson', contact: '5551234567', email: 'alice@example.com', jobTitle: 'Graphic Designer', status: 'Rejected' },
    { id: 10, name: 'John Doe', contact: '1234567890', email: 'john@example.com', jobTitle: 'Software Engineer', status: 'Pending' },
    { id: 11, name: 'Jane Smith', contact: '9876543210', email: 'jane@example.com', jobTitle: 'Marketing Manager', status: 'Approved' },
    { id: 12, name: 'Alice Johnson', contact: '5551234567', email: 'alice@example.com', jobTitle: 'Graphic Designer', status: 'Rejected' },
    { id: 13, name: 'John Doe', contact: '1234567890', email: 'john@example.com', jobTitle: 'Software Engineer', status: 'Pending' },
    { id: 14, name: 'Jane Smith', contact: '9876543210', email: 'jane@example.com', jobTitle: 'Marketing Manager', status: 'Approved' },
    { id: 15, name: 'Alice Johnson', contact: '5551234567', email: 'alice@example.com', jobTitle: 'Graphic Designer', status: 'Rejected' }
  ];

  return (
    <div className="applications-container">
      <h1>Applications</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Contact No.</th>
            <th>Email ID</th>
            <th>Job Title</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {applicationsData.map(application => (
            <tr key={application.id}>
              <td>{application.id}</td>
              <td>{application.name}</td>
              <td>{application.contact}</td>
              <td>{application.email}</td>
              <td>{application.jobTitle}</td>
              <td>{application.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Applications;
