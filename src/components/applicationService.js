const API_URL = 'https://example.com/api/applications'; // Replace with your API URL

// Function to accept an application
export const acceptApplication = async (applicationId) => {
  try {
    const response = await fetch(`${API_URL}/accept/${applicationId}`, {
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
    const response = await fetch(`${API_URL}/reject/${applicationId}`, {
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
