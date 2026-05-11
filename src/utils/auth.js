const TOKEN_KEY = 'rise_confirm_token';
const USER_KEY = 'rise_confirm_user';
const PERMISSIONS_KEY = 'rise_confirm_permissions';

export const setAuthData = (data, identifier) => {
  if (data.accessToken) {
    localStorage.setItem(TOKEN_KEY, data.accessToken);
  }
  
  const user = data.user;
  if (user) {
    localStorage.setItem(USER_KEY, JSON.stringify(user));
    localStorage.setItem('userName', `${user.firstName} ${user.lastName}`);
  } else if (identifier) {
    localStorage.setItem('userName', identifier);
  }
};

export const setPermissions = (permissions) => {
  localStorage.setItem(PERMISSIONS_KEY, JSON.stringify(permissions));
};

export const getPermissions = () => {
  const perms = localStorage.getItem(PERMISSIONS_KEY);
  return perms ? JSON.parse(perms) : [];
};

export const hasPermission = (permission) => {
  const perms = getPermissions();
  return perms.includes(permission);
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
  localStorage.removeItem(PERMISSIONS_KEY);
  localStorage.removeItem('userName');
};

export const isAuthenticated = () => {
  return !!localStorage.getItem(TOKEN_KEY);
};

export const authUtils = {
  setAuthData,
  setPermissions,
  getPermissions,
  hasPermission,
  getToken,
  getUser,
  clearAuthData,
  isAuthenticated
};
