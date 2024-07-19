const API_URL = 'https://example.com/api/users'; // Replace with your API URL

// Function to add a new user
export const addUser = async (user) => {
  try {
    const response = await fetch(`${API_URL}/add`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    });

    if (!response.ok) {
      throw new Error('Failed to add user');
    }

    const data = await response.json();
    return data.message; // Assuming backend returns a confirmation message
  } catch (error) {
    console.error('Error adding user:', error.message);
    throw error;
  }
};

// Function to remove a user by ID
export const removeUser = async (userId) => {
  try {
    const response = await fetch(`${API_URL}/remove/${userId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Failed to remove user');
    }

    const data = await response.json();
    return data.message; // Assuming backend returns a confirmation message
  } catch (error) {
    console.error('Error removing user:', error.message);
    throw error;
  }
};
