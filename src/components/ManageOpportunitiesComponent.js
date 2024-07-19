import React, { useState } from 'react';
import { addOpportunity, updateOpportunity, deleteOpportunity, acceptApplication, rejectApplication } from './opportunityService'; // Import functions from opportunityService
import './ManageOpportunitiesComponent.css'; // Import CSS file

const ManageOpportunitiesComponent = () => {
  const [opportunity, setOpportunity] = useState({ name: '', date: '' });
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(null);

  const handleAddOpportunity = async (event) => {
    event.preventDefault();
    try {
      const responseMessage = await addOpportunity(opportunity);
      setMessage(responseMessage);
      setOpportunity({ name: '', date: '' });
    } catch (error) {
      setError(error.message);
    }
  };

  const handleUpdateOpportunity = async (opportunityId, updatedOpportunity) => {
    try {
      const responseMessage = await updateOpportunity(opportunityId, updatedOpportunity);
      setMessage(responseMessage);
    } catch (error) {
      setError(error.message);
    }
  };

  const handleDeleteOpportunity = async (opportunityId) => {
    try {
      const responseMessage = await deleteOpportunity(opportunityId);
      setMessage(responseMessage);
    } catch (error) {
      setError(error.message);
    }
  };

  const handleAcceptApplication = async (applicationId) => {
    try {
      const responseMessage = await acceptApplication(applicationId);
      setMessage(responseMessage);
    } catch (error) {
      setError(error.message);
    }
  };

  const handleRejectApplication = async (applicationId) => {
    try {
      const responseMessage = await rejectApplication(applicationId);
      setMessage(responseMessage);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="manage-opportunities-container">
      <h2>Manage Opportunities</h2>
      <form onSubmit={handleAddOpportunity}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={opportunity.name}
            onChange={(e) => setOpportunity({ ...opportunity, name: e.target.value })}
            required
          />
        </div>
        <div>
          <label>Date:</label>
          <input
            type="date"
            value={opportunity.date}
            onChange={(e) => setOpportunity({ ...opportunity, date: e.target.value })}
            required
          />
        </div>
        <button type="submit">Add Opportunity</button>
      </form>
      {message && <p className="success">{message}</p>}
      {error && <p className="error">{error}</p>}
      <div>
        {/* Add functionality to update, delete, accept, and reject opportunities here */}
        {/* Example buttons for these actions */}
        <button className="button-update" onClick={() => handleUpdateOpportunity('opportunityId123', { name: 'Updated Opportunity', date: '2023-12-31' })}>Update Opportunity</button>
        <button className="button-delete" onClick={() => handleDeleteOpportunity('opportunityId123')}>Delete Opportunity</button>
        <button className="button-accept" onClick={() => handleAcceptApplication('applicationId123')}>Accept Application</button>
        <button className="button-reject" onClick={() => handleRejectApplication('applicationId123')}>Reject Application</button>
      </div>
    </div>
  );
};

export default ManageOpportunitiesComponent;
