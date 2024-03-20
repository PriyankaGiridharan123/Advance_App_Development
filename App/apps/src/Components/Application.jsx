import React from 'react';
import './Application.css';

const Applications = () => {
  const applicationsData = [
    { id: 1, name: 'John Doe', contact: '1234567890', email: 'john@example.com', jobTitle: 'Software Engineer', status: 'Pending', category: 'premium' },
    { id: 2, name: 'Jane Smith', contact: '9876543210', email: 'jane@example.com', jobTitle: 'Marketing Manager', status: 'Approved', category: 'premium' },
    { id: 3, name: 'Alice Johnson', contact: '5551234567', email: 'alice@example.com', jobTitle: 'Graphic Designer', status: 'Rejected', category: 'premium' },
    { id: 2, name: 'Jane Smith', contact: '9876543210', email: 'jane@example.com', jobTitle: 'Marketing Manager', status: 'Approved', category: 'premium' },
    { id: 3, name: 'Alice Johnson', contact: '5551234567', email: 'alice@example.com', jobTitle: 'Graphic Designer', status: 'Rejected', category: 'premium' },
    { id: 4, name: 'Jack Black', contact: '1234567890', email: 'jack@example.com', jobTitle: 'Data Analyst', status: 'Pending', category: 'free' },
    { id: 5, name: 'Emily Watson', contact: '9876543210', email: 'emily@example.com', jobTitle: 'Frontend Developer', status: 'Approved', category: 'free' },
    { id: 6, name: 'Michael Johnson', contact: '5551234567', email: 'michael@example.com', jobTitle: 'UI/UX Designer', status: 'Rejected', category: 'free' },
    { id: 5, name: 'Emily Watson', contact: '9876543210', email: 'emily@example.com', jobTitle: 'Frontend Developer', status: 'Approved', category: 'free' },
    { id: 6, name: 'Michael Johnson', contact: '5551234567', email: 'michael@example.com', jobTitle: 'UI/UX Designer', status: 'Rejected', category: 'free' }
  ];

  return (
    <div className="applications-container">
      <h1>Applications on JOB SPARK</h1>

      <div className="premium-category">
        <h2>Premium Category</h2>
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
            {applicationsData.filter(app => app.category === 'premium').map(application => (
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

      <div className="free-category">
        <h2>Free Category</h2>
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
            {applicationsData.filter(app => app.category === 'free').map(application => (
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
    </div>
  );
}

export default Applications;
