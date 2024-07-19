/*
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './AdminDashboard.css'; // Import CSS file

const AdminDashboard = () => {
  const [opportunities, setOpportunities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8080/opportunity")
      .then(response => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then(data => {
        setOpportunities(data);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, []);

  const showOpportunityAlert = () => {
    const description = prompt("Enter Opportunity Description:");
    if (description === null || description.trim() === "") {
      alert("Opportunity Description is required.");
      return;
    }

    const requirement = prompt("Enter Opportunity Requirement:");
    if (requirement === null || requirement.trim() === "") {
      alert("Opportunity Requirement is required.");
      return;
    }

    const userID = 4; // Replace with actual userID as needed
    const staff_ID = 8; // Replace with actual staff_ID as needed

    const opportunityData = {
      opportunity_description: description,
      opportunity_requirement: requirement,
      userID: userID,
      staff_ID: staff_ID
    };

    fetch("http://localhost:8080/opportunity", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(opportunityData),
    })
      .then(response => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then(data => {
        alert("Opportunity added successfully:\n" + JSON.stringify(data));
        setOpportunities([...opportunities, data]); // Add new opportunity to the list
      })
      .catch(error => {
        alert("There was a problem adding the opportunity: " + error.message);
      });
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="admin-dashboard">
      <div className="sidebar">
        <ul>
        <li>
            <Link to="/ManageUsersComponent">Manage users</Link>
          </li>
          <li>
            <Link to="/ManageOrganizationsComponent">Manage Organizations</Link>
          </li>
          <li>
            <Link to="/ManageApplicationsComponent">Manage Applications</Link>
          </li>
        </ul>
      </div>

      <div className="content">
        <h1>Admin Dashboard</h1>
        <div className="panel">
          <div className="panel-header">
            <h2 className="panel-title">Opportunities</h2>
            <button className="button" onClick={showOpportunityAlert}>Add New Opportunity</button>
          </div>
          <div className="panel-content">
            <div className="table-container">
              <table className="table">
                <thead>
                  <tr>
                    <th>Description</th>
                    <th>Requirement</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {opportunities.map(opportunity => (
                    <tr key={opportunity.opportunityID}>
                      <td>{opportunity.opportunity_description}</td>
                      <td>{opportunity.opportunity_requirement}</td>
                      <td>
                        <button className="button">Edit</button>
                        <button className="button">Delete</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const deleteOpportunity = (id) => {
    fetch(`http://localhost:8080/opportunity/${id}`, {
      method: 'DELETE',
    })
      .then(response => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        setOpportunities(opportunities.filter(opportunity => opportunity.opportunityID !== id));
        alert("Opportunity deleted successfully.");
      })
      .catch(error => {
        alert("There was a problem deleting the opportunity: " + error.message);
      });
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="admin-dashboard">
      <div className="sidebar">
        <ul>
          <li>
            <Link to="/ManageUsersComponent">Manage users</Link>
          </li>
          <li>
            <Link to="/ManageOrganizationsComponent">Manage Organizations</Link>
          </li>
          <li>
            <Link to="/ManageApplicationsComponent">Manage Applications</Link>
          </li>
        </ul>
      </div>

      <div className="content">
        <h1>Admin Dashboard</h1>
        <div className="panel">
          <div className="panel-header">
            <h2 className="panel-title">Opportunities</h2>
            <button className="button" onClick={showOpportunityAlert}>Add New Opportunity</button>
          </div>
          <div className="panel-content">
            <div className="table-container">
              <table className="table">
                <thead>
                  <tr>
                    <th>Description</th>
                    <th>Requirement</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {opportunities.map(opportunity => (
                    <tr key={opportunity.opportunityID}>
                      <td>{opportunity.opportunity_description}</td>
                      <td>{opportunity.opportunity_requirement}</td>
                      <td>
                        <button className="button">Edit</button>
                        <button
                          className="button"
                          onClick={() => deleteOpportunity(opportunity.opportunityID)}
                        >
                          Delete
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
    </div>
  );
};


export default AdminDashboard;*/
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './AdminDashboard.css'; // Import CSS file

const AdminDashboard = () => {
  const [opportunities, setOpportunities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8080/opportunity")
      .then(response => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then(data => {
        setOpportunities(data);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, []);

  const showOpportunityAlert = () => {
    const description = prompt("Enter Opportunity Description:");
    if (description === null || description.trim() === "") {
      alert("Opportunity Description is required.");
      return;
    }

    const requirement = prompt("Enter Opportunity Requirement:");
    if (requirement === null || requirement.trim() === "") {
      alert("Opportunity Requirement is required.");
      return;
    }

    const userID = 4; // Replace with actual userID as needed
    const staff_ID = 8; // Replace with actual staff_ID as needed

    const opportunityData = {
      opportunity_description: description,
      opportunity_requirement: requirement,
      userID: userID,
      staff_ID: staff_ID
    };

    fetch("http://localhost:8080/opportunity", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(opportunityData),
    })
      .then(response => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then(data => {
        alert("Opportunity added successfully:\n" + JSON.stringify(data));
        setOpportunities([...opportunities, data]); // Add new opportunity to the list
      })
      .catch(error => {
        alert("There was a problem adding the opportunity: " + error.message);
      });
  };

  const deleteOpportunity = (id) => {
    fetch(`http://localhost:8080/opportunity/${id}`, {
      method: 'DELETE',
    })
      .then(response => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        setOpportunities(opportunities.filter(opportunity => opportunity.opportunityID !== id));
        alert("Opportunity deleted successfully.");
      })
      .catch(error => {
        alert("There was a problem deleting the opportunity: " + error.message);
      });
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="admin-dashboard">
      <div className="sidebar">
        <ul>
          <li>
            <Link to="/ManageUsersComponent">Manage users</Link>
          </li>
          <li>
            <Link to="/ManageOrganizationsComponent">Manage Organizations</Link>
          </li>
          <li>
            <Link to="/ManageApplicationsComponent">Manage Applications</Link>
          </li>
        </ul>
      </div>

      <div className="content">
        <h1>Admin Dashboard</h1>
        <div className="panel">
          <div className="panel-header">
            <h2 className="panel-title">Opportunities</h2>
            <button className="button" onClick={showOpportunityAlert}>Add New Opportunity</button>
          </div>
          <div className="panel-content">
            <div className="table-container">
              <table className="table">
                <thead>
                  <tr>
                    <th>Description</th>
                    <th>Requirement</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {opportunities.map(opportunity => (
                    <tr key={opportunity.opportunityID}>
                      <td>{opportunity.opportunity_description}</td>
                      <td>{opportunity.opportunity_requirement}</td>
                      <td>
                        <button className="button">Edit</button>
                        <button
                          className="button"
                          onClick={() => deleteOpportunity(opportunity.opportunityID)}
                        >
                          Delete
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
    </div>
  );
};

export default AdminDashboard;

