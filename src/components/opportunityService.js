const API_URL = 'https://example.com/api/opportunities'; // Replace with your API URL

// Function to add a new opportunity
export const addOpportunity = async (opportunity) => {
  try {
    const response = await fetch(`${API_URL}/add`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(opportunity),
    });

    if (!response.ok) {
      throw new Error('Failed to add opportunity');
    }

    const data = await response.json();
    return data.message; // Assuming backend returns a confirmation message
  } catch (error) {
    console.error('Error adding opportunity:', error.message);
    throw error;
  }
};

// Function to update an opportunity
export const updateOpportunity = async (opportunityId, updatedOpportunity) => {
  try {
    const response = await fetch(`${API_URL}/update/${opportunityId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedOpportunity),
    });

    if (!response.ok) {
      throw new Error('Failed to update opportunity');
    }

    const data = await response.json();
    return data.message; // Assuming backend returns a confirmation message
  } catch (error) {
    console.error('Error updating opportunity:', error.message);
    throw error;
  }
};

// Function to delete an opportunity
export const deleteOpportunity = async (opportunityId) => {
  try {
    const response = await fetch(`${API_URL}/delete/${opportunityId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Failed to delete opportunity');
    }

    const data = await response.json();
    return data.message; // Assuming backend returns a confirmation message
  } catch (error) {
    console.error('Error deleting opportunity:', error.message);
    throw error;
  }
};

// Function to accept an application
export const acceptApplication = async (applicationId) => {
  try {
    const response = await fetch(`${API_URL}/applications/accept/${applicationId}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Failed to accept application');
    }

    const data = await response.json();
    return data.message; // Assuming backend returns a confirmation message
  } catch (error) {
    console.error('Error accepting application:', error.message);
    throw error;
  }
};

// Function to reject an application
export const rejectApplication = async (applicationId) => {
  try {
    const response = await fetch(`${API_URL}/applications/reject/${applicationId}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Failed to reject application');
    }

    const data = await response.json();
    return data.message; // Assuming backend returns a confirmation message
  } catch (error) {
    console.error('Error rejecting application:', error.message);
    throw error;
  }
};
