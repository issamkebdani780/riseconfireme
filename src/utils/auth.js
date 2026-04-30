const TOKEN_KEY = 'rise_confirm_token';
const USER_KEY = 'rise_confirm_user';

export const setAuthData = (data, identifier) => {
  if (data.accessToken) {
    localStorage.setItem(TOKEN_KEY, data.accessToken);
  }
  if (data.agent) {
    localStorage.setItem(USER_KEY, JSON.stringify(data.agent));
  } else if (identifier) {
    localStorage.setItem('userName', identifier);
  }
  
  if (data.agent) {
    localStorage.setItem('userName', `${data.agent.firstName} ${data.agent.lastName}`);
  } else if (identifier) {
    localStorage.setItem('userName', identifier);
  }
};

export const getToken = () => {
  return localStorage.getItem(TOKEN_KEY);
};

export const getUser = () => {
  const user = localStorage.getItem(USER_KEY);
  return user ? JSON.parse(user) : null;
};

export const clearAuthData = () => {
  localStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem(USER_KEY);
  localStorage.removeItem('userName');
};

export const isAuthenticated = () => {
  return !!localStorage.getItem(TOKEN_KEY);
};

export const authUtils = {
  setAuthData,
  getToken,
  getUser,
  clearAuthData,
  isAuthenticated
};
