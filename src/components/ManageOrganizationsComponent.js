import React, { useEffect, useState } from 'react';
import { addOrganization, removeOrganization } from './organizationService'; // Import functions from organizationService
import './ManageOrganizationsComponent.css'; // Import CSS file

const ManageOrganizationsComponent = () => {
  const [organizations, setOrganizations] = useState([]);
  const [organizationName, setOrganizationName] = useState('');
  const [address, setAddress] = useState('');
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:8080/organization")
      .then(response => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then(data => {
        setOrganizations(data);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, []);

  const handleAddOrganization = async (event) => {
    event.preventDefault();
    try {
      const newOrganization = { name: organizationName, address };
      const responseMessage = await addOrganization(newOrganization);
      setMessage(responseMessage);
      setOrganizations([...organizations, newOrganization]);
      setOrganizationName('');
      setAddress('');
    } catch (error) {
      setError(error.message);
    }
  };

  const handleRemoveOrganization = async (organizationId) => {
    try {
      const responseMessage = await removeOrganization(organizationId);
      setMessage(responseMessage);
      setOrganizations(organizations.filter(org => org.organizationID !== organizationId));
    } catch (error) {
      setError(error.message);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="manage-organizations-container">
      <div className="table-container">
        <h2>Manage Organizations</h2>
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Address</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {organizations.map(organization => (
              <tr key={organization.organizationID}>
                <td>{organization.name}</td>
                <td>{organization.address}</td>
                <td>
                  <button className="button-remove" onClick={() => handleRemoveOrganization(organization.organizationID)}>
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="form-container">
        <h2>Add Organization</h2>
        <form onSubmit={handleAddOrganization}>
          <div>
            <label>Organization Name:</label>
            <input
              type="text"
              value={organizationName}
              onChange={(e) => setOrganizationName(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Address:</label>
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
          </div>
          <button type="submit">Add Organization</button>
        </form>
        {message && <p className="success">{message}</p>}
        {error && <p className="error">{error}</p>}
      </div>
    </div>
  );
};

export default ManageOrganizationsComponent;
