import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { acceptApplication, rejectApplication } from './applicationService'; // Import functions from applicationService
import './ManageApplicationsComponent.css'; // Import CSS file

const ManageApplicationsComponent = () => {
  const [applications, setApplications] = useState([]);
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8080/application")
      .then(response => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then(data => {
        setApplications(data);
      })
      .catch(error => {
        setError(error.message);
      });
  }, []);

  const showApplicationAlert = () => {
    const appName = prompt("Enter Application Name:");
    if (appName === null || appName.trim() === "") {
      alert("Application Name is required.");
      return;
    }

    const status = prompt("Enter Status:");
    if (status === null || status.trim() === "") {
      alert("Status is required.");
      return;
    }

    const applicationData = {
      name: appName,
      status: status,
    };

    fetch("http://localhost:8080/application", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(applicationData),
    })
      .then(response => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then(data => {
        alert("Application added successfully:\n" + JSON.stringify(data));
        setApplications([...applications, data]); // Add new application to the list
      })
      .catch(error => {
        alert("There was a problem adding the application: " + error.message);
      });
  };

  const handleAcceptApplication = async (applicationId) => {
    try {
      const responseMessage = await acceptApplication(applicationId);
      setMessage(responseMessage);
      setApplications(prevApplications =>
        prevApplications.map(app =>
          app.id === applicationId ? { ...app, status: 'Accepted' } : app
        )
      );
    } catch (error) {
      setError(error.message);
    }
  };

  const handleRejectApplication = async (applicationId) => {
    try {
      const responseMessage = await rejectApplication(applicationId);
      setMessage(responseMessage);
      setApplications(prevApplications =>
        prevApplications.map(app =>
          app.id === applicationId ? { ...app, status: 'Rejected' } : app
        )
      );
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="manage-applications">
      <div className="sidebar">
        <ul>
          <li>
            <Link to="/ManageUsersComponent">Manage Users</Link>
          </li>
          <li>
            <Link to="/ManageOrganizationsComponent">Manage Organizations</Link>
          </li>
          <li>
            <Link to="/ManageApplicationsComponent">Manage Applications</Link>
          </li>
        </ul>
      </div>

      <div className="panel">
        <div className="panel-header">
          <h2 className="panel-title">Manage Applications</h2>
          <button className="button" onClick={showApplicationAlert}>Add Application</button>
        </div>
        <div className="panel-content">
          {message && <p className="success">{message}</p>}
          {error && <p className="error">{error}</p>}
          <div className="table-container">
            <table className="table">
              <thead>
                <tr>
                  <th>Username</th>
                  <th>Application Name</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {applications.map(application => (
                  <tr key={application.id}>
                    <td>{application.username}</td>
                    <td>{application.name}</td>
                    <td>{application.status}</td>
                    <td>
                      <button
                        className="button-accept"
                        onClick={() => handleAcceptApplication(application.id)}
                      >
                        Accept Application
                      </button>
                      <button
                        className="button-reject"
                        onClick={() => handleRejectApplication(application.id)}
                      >
                        Reject Application
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageApplicationsComponent;
