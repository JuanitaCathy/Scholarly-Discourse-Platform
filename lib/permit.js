const permitApiKey = process.env.PERMIT_API_KEY;

// Function to check permission using Permit.io
export const checkPermission = async (userId, action, resource) => {
  try {
    const response = await fetch(`https://permit.io/api/v1/check/${userId}/${action}/${resource}`, {
      headers: {
        'Authorization': `Bearer ${permitApiKey}`,
      },
    });
    const data = await response.json();
    return data.allowed; // Return boolean
  } catch (error) {
    console.error('Error checking permission:', error);
    return false;
  }
};
