export const setAuthData = (response, fallbackName = '') => {
  if (!response) return;

  // Extract and save token
  const token = response.token || response.access_token || response.bearer_token;
  if (token) {
    localStorage.setItem('token', token);
  }

  // Extract and save user name
  let nameToSave = fallbackName;
  if (response.user && response.user.firstName) {
    nameToSave = `${response.user.firstName} ${response.user.lastName || ''}`.trim();
  }
  
  if (nameToSave) {
    localStorage.setItem('userName', nameToSave);
  }
};

export const clearAuthData = () => {
  if (typeof window !== 'undefined') {
    localStorage.removeItem('token');
    localStorage.removeItem('userName');
  }
};

export const getAuthToken = () => {
  return typeof window !== 'undefined' ? localStorage.getItem('token') : null;
};

export const getUserName = () => {
  return typeof window !== 'undefined' ? localStorage.getItem('userName') : null;
};

export const isAuthenticated = () => {
  return !!getUserName() || !!getAuthToken();
};
