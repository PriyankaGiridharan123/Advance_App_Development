import React from 'react';
import './ViewApplication.css';

const ViewApplications = () => {
  // Static application data with an "Approved" status
  const applicationsData = [
    { id: 1, name: 'John Doe', contact: '1234567890', email: 'john@example.com', jobTitle: 'Software Engineer', status: 'Approved' }
  ];

  return (
    <div>
      <div className="application-container">
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
                <td className={application.status.toLowerCase()}>{application.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="approval-message">
        <p>Your application for the Software Engineer position has been approved.</p>
        <p>Congratulations on your acceptance to Job Spark! We're excited to welcome you to our team.</p>
        <p>If you have any questions or need further assistance, please feel free to contact us.</p>
        <p>Thank you for choosing Job Spark for your career journey!</p>
        <p>Best regards,</p>
        <p>The Job Spark Team</p>
      </div>
    </div>
  );
}

export default ViewApplications;
