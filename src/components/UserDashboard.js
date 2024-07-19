import React from 'react';

const UserDashboard = ({ opportunities = [], applyToOpportunity }) => {
  return (
    <div>
      <h2>User Dashboard</h2>
      <ul>
        {opportunities.length > 0 ? (
          opportunities.map(opportunity => (
            <li key={opportunity.id}>
              {opportunity.name} - <button onClick={() => applyToOpportunity(opportunity.id)}>Apply</button>
            </li>
          ))
        ) : (
          <li>No opportunities available</li>
        )}
      </ul>
    </div>
  );
};

export default UserDashboard;
