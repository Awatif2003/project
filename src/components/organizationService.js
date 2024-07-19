const API_URL = 'https://example.com/api/organizations'; // Replace with your API URL

// Function to add a new organization
export const addOrganization = async (organization) => {
  try {
    const response = await fetch(`${API_URL}/add`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(organization),
    });

    if (!response.ok) {
      throw new Error('Failed to add organization');
    }

    const data = await response.json();
    return data.message; // Assuming backend returns a confirmation message
  } catch (error) {
    console.error('Error adding organization:', error.message);
    throw error;
  }
};

// Function to remove an organization
export const removeOrganization = async (organizationId) => {
  try {
    const response = await fetch(`${API_URL}/remove/${organizationId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Failed to remove organization');
    }

    const data = await response.json();
    return data.message; // Assuming backend returns a confirmation message
  } catch (error) {
    console.error('Error removing organization:', error.message);
    throw error;
  }
};
